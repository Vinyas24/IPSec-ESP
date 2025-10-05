import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Loader2, CheckCircle, XCircle, Package, Layers, Clock } from "lucide-react";

const ResultPanel = ({ result, isSimulating }) => {
  if (isSimulating) {
    return (
      <Card className="bg-black/30 backdrop-blur-sm border-white/20 h-fit">
        <CardContent className="flex flex-col items-center justify-center p-12">
          <Loader2 className="w-12 h-12 text-emerald-400 animate-spin mb-6" />
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Processing ESP Simulation</h3>
          <p className="text-slate-400 text-center">Analyzing packet structure and security parameters...</p>
          <div className="w-full mt-6">
            <Progress value={85} className="h-2 bg-black/40" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="bg-black/30 backdrop-blur-sm border-white/20 h-fit">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          <Package className="w-16 h-16 text-slate-500 mb-6" />
          <h3 className="text-xl font-semibold text-slate-300 mb-2">Ready for Simulation</h3>
          <p className="text-slate-400">Configure parameters and click "Simulate ESP" to see results</p>
        </CardContent>
      </Card>
    );
  }

  const isAccepted = result.status === "Accepted";

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <Card className={`backdrop-blur-sm border-2 ${isAccepted ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-red-500/10 border-red-500/50'}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            {isAccepted ? (
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            ) : (
              <XCircle className="w-8 h-8 text-red-400" />
            )}
            <div>
              <CardTitle className={`text-2xl ${isAccepted ? 'text-emerald-400' : 'text-red-400'}`}>
                {result.status}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">
                  {new Date(result.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* ESP Parameters */}
      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-xl text-slate-200 flex items-center gap-2">
            <Layers className="w-5 h-5" />
            ESP Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <div>
            <Label className="text-slate-400 text-sm">SPI</Label>
            <p className="text-2xl font-bold text-emerald-400">{result.spi}</p>
          </div>
          <div>
            <Label className="text-slate-400 text-sm">Sequence Number</Label>
            <p className="text-2xl font-bold text-teal-400">{result.sequenceNumber}</p>
          </div>
          <div>
            <Label className="text-slate-400 text-sm">Mode</Label>
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mt-1">
              {result.mode.charAt(0).toUpperCase() + result.mode.slice(1)}
            </Badge>
          </div>
          <div>
            <Label className="text-slate-400 text-sm">Payload Size</Label>
            <p className="text-xl font-semibold text-slate-200">{result.payloadSize} bytes</p>
          </div>
        </CardContent>
      </Card>



      {/* Size Analysis */}
      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-xl text-slate-200">Size Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-400 text-sm">ESP Header</Label>
              <p className="text-lg text-emerald-400">{result.espHeaderSize} bytes</p>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400 text-sm">IV Size</Label>
              <p className="text-lg text-teal-400">{result.ivSize} bytes</p>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400 text-sm">Padding</Label>
              <p className="text-lg text-cyan-400">{result.paddingSize} bytes</p>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400 text-sm">Auth Data</Label>
              <p className="text-lg text-blue-400">{result.authSize} bytes</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-300 font-semibold">Total Overhead:</span>
              <span className="text-xl font-bold text-orange-400">{result.totalOverhead} bytes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300 font-semibold">Total Packet Size:</span>
              <span className="text-2xl font-bold text-white">{result.totalPacketSize} bytes</span>
            </div>
            {result.mtu && (
              <div className="flex justify-between items-center mt-2">
                <span className="text-slate-400 text-sm">MTU Limit:</span>
                <span className="text-sm text-slate-400">{result.mtu} bytes</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Encapsulation Steps */}
      <Card className="bg-black/30 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-xl text-slate-200">Encapsulation Process</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {result.encapsulationSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {step.step}
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">{step.action}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

// Label component for consistency
const Label = ({ children, className = "" }) => (
  <label className={`block text-sm font-medium ${className}`}>
    {children}
  </label>
);

export default ResultPanel;