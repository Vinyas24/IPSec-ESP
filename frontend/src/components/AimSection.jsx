import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Target, Zap, Lock } from "lucide-react";

const AimSection = () => {
  return (
    <div className="space-y-8">
      {/* Main Aim Card */}
      <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30 shadow-xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-emerald-400 mb-2">Primary Aim</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              To simulate and demonstrate the <span className="font-semibold text-emerald-400">IPSec Encapsulating Security Protocol (ESP)</span> 
              functionality through interactive mock scenarios, providing hands-on experience with security parameter configurations, 
              encapsulation processes, and packet structure analysis without requiring actual cryptographic implementations.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/30">
                <div className="text-emerald-400 font-semibold mb-2">Educational Focus</div>
                <div className="text-slate-400">Bridge theoretical knowledge with practical ESP protocol understanding</div>
              </div>
              <div className="bg-teal-500/10 p-4 rounded-lg border border-teal-500/30">
                <div className="text-teal-400 font-semibold mb-2">Skill Development</div>
                <div className="text-slate-400">Develop network security analysis and troubleshooting capabilities</div>
              </div>
              <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-cyan-400 font-semibold mb-2">Career Preparation</div>
                <div className="text-slate-400">Prepare for cybersecurity roles requiring VPN and IPSec expertise</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Secondary Aims */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-black/30 backdrop-blur-sm border-white/20 hover:border-emerald-500/50 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Understanding ESP Framework</h3>
                <p className="text-slate-300 leading-relaxed">
                  Provide comprehensive understanding of ESP header structure, security associations, 
                  and the role of Security Parameter Index (SPI) in IPSec communication protocols.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 backdrop-blur-sm border-white/20 hover:border-teal-500/50 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-3">Practical Security Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  Enable practical analysis of transport vs tunnel mode operations, payload encapsulation, 
                  and the impact of various ESP configurations on network packet characteristics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Focus Areas */}
      <Card className="bg-black/20 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-slate-200 mb-4">Key Focus Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold text-emerald-400 mb-2">Protocol Simulation</h4>
              <p className="text-sm text-slate-400">Mock ESP encapsulation and decapsulation processes</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-teal-500 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold text-teal-400 mb-2">Security Parameters</h4>
              <p className="text-sm text-slate-400">SPI management and sequence number handling</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold text-cyan-400 mb-2">Mode Analysis</h4>
              <p className="text-sm text-slate-400">Transport vs Tunnel mode comparison and effects</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AimSection;