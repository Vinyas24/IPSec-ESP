import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Loader2, Play, RotateCcw, Settings } from "lucide-react";

const InputPanel = ({ onSimulate, isSimulating, onReset, hasResult }) => {
  // Generate random default values
  const generateRandomDefaults = () => {
    const randomIP1 = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const randomIP2 = `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const modes = ["transport", "tunnel"];
    const randomSPI = Math.floor(Math.random() * 65535) + 1000;
    const randomSeq = Math.floor(Math.random() * 1000) + 1;
    const randomPayload = Math.floor(Math.random() * 1400) + 64;
    
    return {
      sender: randomIP1,
      receiver: randomIP2,
      mode: modes[Math.floor(Math.random() * modes.length)],
      payloadSize: randomPayload,
      spi: randomSPI,
      sequenceNumber: randomSeq,
      mtuEnabled: false,
      mtu: 1500
    };
  };

  const [formData, setFormData] = useState(generateRandomDefaults());

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSimulating) {
      onSimulate(formData);
    }
  };

  const handleReset = () => {
    setFormData(generateRandomDefaults());
    onReset();
  };

  return (
    <Card className="bg-black/30 backdrop-blur-sm border-white/20 h-fit">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Settings className="w-6 h-6 text-emerald-400" />
          <CardTitle className="text-2xl text-emerald-400">Configuration Panel</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Network Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200 border-b border-white/20 pb-2">
              Network Configuration
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="sender" className="text-slate-300 mb-2 block">Sender IP</Label>
                <Input
                  id="sender"
                  value={formData.sender}
                  onChange={(e) => handleInputChange("sender", e.target.value)}
                  className="bg-black/40 border-white/20 text-white focus:border-emerald-500"
                  placeholder="192.168.1.10"
                />
              </div>
              
              <div>
                <Label htmlFor="receiver" className="text-slate-300 mb-2 block">Receiver IP</Label>
                <Input
                  id="receiver"
                  value={formData.receiver}
                  onChange={(e) => handleInputChange("receiver", e.target.value)}
                  className="bg-black/40 border-white/20 text-white focus:border-emerald-500"
                  placeholder="192.168.1.20"
                />
              </div>
            </div>
          </div>

          {/* ESP Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200 border-b border-white/20 pb-2">
              ESP Parameters
            </h3>
            
            <div>
              <Label htmlFor="mode" className="text-slate-300 mb-2 block">ESP Mode</Label>
              <Select value={formData.mode} onValueChange={(value) => handleInputChange("mode", value)}>
                <SelectTrigger className="bg-black/40 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  <SelectItem value="transport" className="text-white">Transport Mode</SelectItem>
                  <SelectItem value="tunnel" className="text-white">Tunnel Mode</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="spi" className="text-slate-300 mb-2 block">SPI (Security Parameter Index)</Label>
                <Input
                  id="spi"
                  type="number"
                  value={formData.spi}
                  onChange={(e) => handleInputChange("spi", parseInt(e.target.value) || 0)}
                  className="bg-black/40 border-white/20 text-white focus:border-emerald-500"
                  min="1"
                />
              </div>
              
              <div>
                <Label htmlFor="sequenceNumber" className="text-slate-300 mb-2 block">Sequence Number</Label>
                <Input
                  id="sequenceNumber"
                  type="number"
                  value={formData.sequenceNumber}
                  onChange={(e) => handleInputChange("sequenceNumber", parseInt(e.target.value) || 0)}
                  className="bg-black/40 border-white/20 text-white focus:border-emerald-500"
                  min="1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="payloadSize" className="text-slate-300 mb-2 block">
                Payload Size (bytes)
              </Label>
              <Input
                id="payloadSize"
                type="number"
                value={formData.payloadSize}
                onChange={(e) => handleInputChange("payloadSize", parseInt(e.target.value) || 0)}
                className="bg-black/40 border-white/20 text-white focus:border-emerald-500"
                min="1"
                max="65535"
              />
            </div>
          </div>

          {/* MTU Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200 border-b border-white/20 pb-2">
              MTU Configuration
            </h3>
            
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-slate-300">Enable MTU Check</Label>
                <p className="text-sm text-slate-400">Simulate MTU constraints</p>
              </div>
              <Switch
                checked={formData.mtuEnabled}
                onCheckedChange={(checked) => handleInputChange("mtuEnabled", checked)}
                className="data-[state=checked]:bg-emerald-500"
              />
            </div>

            {formData.mtuEnabled && (
              <div>
                <Label htmlFor="mtu" className="text-slate-300 mb-2 block">MTU Limit (bytes)</Label>
                <Input
                  id="mtu"
                  type="number"
                  value={formData.mtu}
                  onChange={(e) => handleInputChange("mtu", parseInt(e.target.value) || 1500)}
                  className="bg-black/40 border-white/20 text-white focus:border-emerald-500"
                  min="64"
                  max="9000"
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSimulating}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
            >
              {isSimulating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Simulating...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Simulate ESP
                </>
              )}
            </Button>
            
            {hasResult && (
              <Button
                type="button"
                onClick={handleReset}
                variant="outline"
                className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InputPanel;