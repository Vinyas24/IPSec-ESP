import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, CheckCircle, ArrowRight, Network } from "lucide-react";

const ObjectiveSection = () => {
  const objectives = [
    {
      id: 1,
      title: "ESP Encapsulation Simulation",
      description: "Demonstrate the complete ESP encapsulation process using configurable mock inputs and static output generation.",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      title: "Security Parameter Display",
      description: "Visualize critical ESP parameters including SPI values, sequence numbers, operational modes, and calculated packet sizes.",
      icon: Network,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Protocol Mode Analysis",
      description: "Compare and contrast Transport mode versus Tunnel mode operations with detailed parameter breakdowns.",
      icon: ArrowRight,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Packet Structure Visualization",
      description: "Present comprehensive packet structure analysis including headers, trailers, padding calculations, and total size metrics.",
      icon: CheckCircle,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-emerald-400 mb-4">Learning Objectives</CardTitle>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Master the fundamental concepts and practical applications of IPSec ESP through structured simulation exercises
          </p>
        </CardHeader>
      </Card>

      {/* Objectives Grid */}
      <div className="grid gap-6">
        {objectives.map((objective, index) => (
          <Card 
            key={objective.id}
            className="bg-black/30 backdrop-blur-sm border-white/20 hover:border-emerald-500/50 transition-all duration-500 group"
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${objective.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-emerald-400">0{objective.id}</span>
                    <div className="h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent flex-1"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{objective.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">{objective.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expected Outcomes */}
      <Card className="bg-black/20 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-slate-200 mb-6">Expected Learning Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-emerald-400 mb-4">Technical Mastery</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-300">ESP header structure comprehension</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-300">Security Parameter Index (SPI) functionality</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-300">Sequence number importance and usage</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-teal-400 mb-4">Practical Skills</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-300">Mode selection criteria understanding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-300">Packet overhead calculation methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-300">MTU constraint analysis and handling</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ObjectiveSection;