import os
import struct
import hmac
import hashlib
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.backends import default_backend

AES_BLOCK_SIZE = 16

def hmac_sha256(key, data):
    return hmac.new(key, data, hashlib.sha256).digest()

def aes_cbc_encrypt(key, iv, data):
    padder = padding.PKCS7(128).padder()
    padded = padder.update(data) + padder.finalize()
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    return encryptor.update(padded) + encryptor.finalize()

def aes_cbc_decrypt(key, iv, data):
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    padded = decryptor.update(data) + decryptor.finalize()
    unpadder = padding.PKCS7(128).unpadder()
    return unpadder.update(padded) + unpadder.finalize()

def esp_encrypt(mode, spi, seq_num, payload_size):
    # --- Step 1: Create dummy payload depending on mode ---
    if mode.lower() == "tunnel":
        payload = b"IP_HEADER|" + os.urandom(payload_size)  # encrypt whole IP packet
    else:  # transport
        payload = b"TCP_DATA|" + os.urandom(payload_size)  # encrypt only transport data

    # --- Step 2: ESP Header ---
    esp_header = struct.pack("!I", spi) + struct.pack("!I", seq_num)

    # --- Step 3: AES + HMAC Setup ---
    enc_key = hashlib.sha256(b"encryption-key").digest()[:16]
    auth_key = hashlib.sha256(b"auth-key").digest()
    iv = os.urandom(AES_BLOCK_SIZE)

    ciphertext = aes_cbc_encrypt(enc_key, iv, payload)

    # --- Step 4: Integrity check (HMAC) ---
    hmac_value = hmac_sha256(auth_key, esp_header + iv + ciphertext)

    # --- Step 5: Final ESP packet ---
    esp_packet = esp_header + iv + ciphertext + hmac_value

    print(f"\n--- ESP {mode.upper()} MODE ENCRYPTION ---")
    print(f"SPI: {spi}")
    print(f"Sequence: {seq_num}")
    print(f"Payload size: {len(payload)} bytes")
    print(f"Encrypted ESP packet length: {len(esp_packet)} bytes")

    return esp_packet, enc_key, auth_key


def esp_decrypt(esp_packet, enc_key, auth_key):
    # --- Extract header ---
    spi, seq = struct.unpack("!I", esp_packet[:4])[0], struct.unpack("!I", esp_packet[4:8])[0]
    iv = esp_packet[8:24]
    ciphertext = esp_packet[24:-32]
    received_hmac = esp_packet[-32:]

    # --- Verify HMAC ---
    calc_hmac = hmac_sha256(auth_key, esp_packet[: -32])
    if not hmac.compare_digest(received_hmac, calc_hmac):
        raise ValueError("Integrity check failed!")

    # --- Decrypt payload ---
    plaintext = aes_cbc_decrypt(enc_key, iv, ciphertext)

    print(f"\n--- ESP PACKET DECRYPTION ---")
    print(f"SPI: {spi}")
    print(f"Sequence: {seq}")
    print(f"Recovered payload size: {len(plaintext)} bytes")

    return plaintext

if __name__ == "__main__":
    mode = input("Enter ESP mode (tunnel/transport): ").strip().lower()
    spi = int(input("Enter SPI (e.g., 1001): "))
    seq = int(input("Enter Sequence Number: "))
    payload_size = int(input("Enter Payload Size (bytes): "))

    esp_packet, enc_key, auth_key = esp_encrypt(mode, spi, seq, payload_size)
    recovered_payload = esp_decrypt(esp_packet, enc_key, auth_key)

    print("\nDecrypted Payload (hexadecimal):")
    print(recovered_payload.hex())  
    print("\nESP simulation completed.")
