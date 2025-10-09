import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Layers, Shield, Lock, Network, ArrowRight, Key, Eye, AlertTriangle } from "lucide-react";

const TheorySection = () => {
  const espModes = [
    {
      name: "Transport Mode",
      description: "ESP protects only the payload and trailer, leaving the original IP header intact",
      advantages: ["Lower overhead", "Compatible with NAT", "Preserves original routing"],
      disadvantages: ["IP header exposed", "Traffic analysis possible"],
      useCase: "Host-to-host communication"
    },
    {
      name: "Tunnel Mode", 
      description: "ESP protects the entire original IP packet by encapsulating it in a new IP packet",
      advantages: ["Complete packet protection", "Hides internal topology", "Gateway-to-gateway security"],
      disadvantages: ["Higher overhead", "NAT traversal issues"],
      useCase: "Site-to-site VPNs"
    }
  ];

  const espComponents = [
    {
      name: "Security Parameter Index (SPI)",
      description: "32-bit identifier that uniquely identifies the Security Association (SA)",
      purpose: "Allows receiver to identify correct decryption parameters",
      size: "4 bytes",
      color: "emerald"
    },
    {
      name: "Sequence Number",
      description: "32-bit counter providing anti-replay protection",
      purpose: "Prevents packet replay attacks by tracking packet order",
      size: "4 bytes", 
      color: "teal"
    },
    {
      name: "Payload Data",
      description: "The actual data being protected (encrypted)",
      purpose: "Contains the original packet or payload depending on mode",
      size: "Variable",
      color: "cyan"
    },
    {
      name: "Padding",
      description: "Variable-length field ensuring proper block alignment",
      purpose: "Aligns data for encryption algorithm requirements",
      size: "0-255 bytes",
      color: "blue"
    },
    {
      name: "Authentication Data",
      description: "Cryptographic hash providing integrity verification",
      purpose: "Ensures packet has not been tampered with during transmission",
      size: "12-16 bytes typical",
      color: "indigo"
    }
  ];

  const securityServices = [
    {
      service: "Confidentiality",
      icon: Eye,
      description: "Encryption of payload data prevents eavesdropping",
      implementation: "Symmetric encryption algorithms (AES, 3DES)"
    },
    {
      service: "Data Integrity",
      icon: Shield,
      description: "Authentication data ensures packet hasn't been modified",
      implementation: "HMAC with SHA-1, SHA-256, or MD5"
    },
    {
      service: "Anti-Replay",
      icon: Lock,
      description: "Sequence numbers prevent replay of captured packets",
      implementation: "Sliding window protocol with sequence number tracking"
    },
    {
      service: "Limited Traffic Flow Confidentiality",
      icon: Network,
      description: "Tunnel mode can hide communication patterns",
      implementation: "IP header encapsulation and padding techniques"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mb-4">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-emerald-400 mb-2 font-mono">IPSec ESP Theory</CardTitle>
          <p className="text-lg text-emerald-300 max-w-4xl mx-auto leading-relaxed font-mono">
            {'Comprehensive Protocol Analysis & Security Implementation Details'}
          </p>
        </CardHeader>
      </Card>

      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-200 font-mono">Protocol Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            <strong className="text-emerald-400">Encapsulating Security Protocol (ESP)</strong> is a core component of the IPSec protocol suite, 
            designed to provide <strong className="text-teal-400">confidentiality</strong>, <strong className="text-cyan-400">data integrity</strong>, 
            and <strong className="text-blue-400">anti-replay protection</strong> for IP packets in network communications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-emerald-400 font-mono">Key Characteristics:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  IP Protocol Number: 50
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Operates at Network Layer (Layer 3)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Provides both encryption and authentication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Supports two operational modes
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-teal-400 font-mono">Primary Functions:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-emerald-400" />
                  Payload encryption for confidentiality
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400" />
                  Integrity verification via authentication
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  Anti-replay attack prevention
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-400" />
                  Optional traffic flow protection
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-200 font-mono">ESP Header Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              The ESP header and trailer encapsulate the protected payload, providing the necessary security parameters 
              and authentication data for secure transmission.
            </p>
            
            <div className="grid gap-4">
              {espComponents.map((component, index) => (
                <Card key={index} className={`bg-gradient-to-r from-${component.color}-500/10 to-${component.color}-600/5 border-${component.color}-500/30`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge className={`bg-${component.color}-500/20 text-${component.color}-400 border-${component.color}-500/30 font-mono`}>
                        {component.size}
                      </Badge>
                      <div className="flex-1">
                        <h4 className={`text-xl font-semibold text-${component.color}-400 mb-2 font-mono`}>
                          {component.name}
                        </h4>
                        <p className="text-slate-300 mb-2">{component.description}</p>
                        <p className="text-slate-400 text-sm italic">
                          <strong>Purpose:</strong> {component.purpose}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-200 font-mono">Operational Modes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {espModes.map((mode, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-emerald-500 to-teal-500' : 'from-teal-500 to-cyan-500'} rounded-xl flex items-center justify-center`}>
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${index === 0 ? 'text-emerald-400' : 'text-teal-400'} font-mono`}>
                      {mode.name}
                    </h3>
                    <p className="text-slate-300">{mode.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-emerald-500/5 border-emerald-500/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-emerald-400 font-mono text-lg">Advantages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {mode.advantages.map((adv, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-amber-500/5 border-amber-500/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-amber-400 font-mono text-lg">Disadvantages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {mode.disadvantages.map((dis, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                            {dis}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cyan-500/5 border-cyan-500/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-cyan-400 font-mono text-lg">Use Case</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{mode.useCase}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-200 font-mono">Security Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {securityServices.map((service, index) => (
              <Card key={index} className="bg-black/40 border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-2 font-mono">
                        {service.service}
                      </h4>
                      <p className="text-slate-300 mb-3">{service.description}</p>
                      <div className="text-sm text-slate-400">
                        <strong>Implementation : </strong> {service.implementation}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border-amber-500/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <CardTitle className="text-xl text-amber-400 font-mono">Implementation Considerations</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-3 font-mono">Security Considerations</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• ESP alone doesn't provide non-repudiation</li>
                <li>• Key management is critical for security</li>
                <li>• Proper SA (Security Association) setup required</li>
                <li>• Algorithm selection affects performance vs security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 font-mono">Performance Factors</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Encryption/decryption adds processing overhead</li>
                <li>• Packet size increases due to headers and padding</li>
                <li>• MTU considerations for fragmentation</li>
                <li>• Hardware acceleration can improve throughput</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TheorySection;