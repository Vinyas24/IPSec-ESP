import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Settings, Play, BarChart3, AlertTriangle } from "lucide-react";

const ProcedureSection = () => {
  const steps = [
    {
      id: 1,
      title: "Initial Configuration",
      icon: Settings,
      description: "Configure ESP simulation parameters",
      details: [
        "Enter sender and receiver identities",
        "Select ESP operational mode (Transport/Tunnel)",
        "Set payload size in bytes",
        "Configure Security Parameter Index (SPI)",
        "Define sequence number for packet ordering",
        "Optional: Set MTU (Maximum Transmission Unit) limits"
      ],
      color: "emerald"
    },
    {
      id: 2,
      title: "Simulation Execution",
      icon: Play,
      description: "Execute ESP encapsulation simulation",
      details: [
        "Click 'Simulate ESP' to initiate processing",
        "System validates all input parameters",
        "Mock ESP header generation begins",
        "Padding and trailer calculations performed",
        "Total packet size computation executed",
        "MTU compliance verification (if enabled)"
      ],
      color: "teal"
    },
    {
      id: 3,
      title: "Results Analysis",
      icon: BarChart3,
      description: "Review comprehensive simulation output",
      details: [
        "Review ESP header structure details",
        "Analyze payload and overhead breakdown",
        "Examine mode-specific configurations",
        "Verify sequence number progression",
        "Check packet acceptance/rejection status",
        "Study MTU impact on packet processing"
      ],
      color: "cyan"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500 to-emerald-600",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      },
      teal: {
        bg: "from-teal-500 to-teal-600",
        border: "border-teal-500/30",
        text: "text-teal-400",
        badge: "bg-teal-500/20 text-teal-400 border-teal-500/30"
      },
      cyan: {
        bg: "from-cyan-500 to-cyan-600",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      }
    };
    return colors[color];
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-emerald-400 mb-4">Simulation Procedure</CardTitle>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Follow this comprehensive step-by-step procedure to conduct effective ESP simulation exercises
          </p>
        </CardHeader>
      </Card>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const colors = getColorClasses(step.color);
          return (
            <div key={step.id} className="flex items-start gap-6">
              {/* Step Number and Arrow */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-slate-500 mt-6 rotate-90" />
                )}
              </div>

              {/* Step Content */}
              <Card className={`flex-1 bg-black/30 backdrop-blur-sm ${colors.border} border hover:border-opacity-60 transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className={`${colors.badge} border text-sm px-3 py-1`}>
                      Step {step.id}
                    </Badge>
                    <h3 className={`text-2xl font-bold ${colors.text}`}>{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-slate-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Important Notes */}
      <Card className="bg-black/20 backdrop-blur-sm border-amber-500/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <CardTitle className="text-xl text-amber-400">Important Notes</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-3">Simulation Limitations</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• No actual cryptographic operations performed</li>
                <li>• Static mock data used for demonstration</li>
                <li>• No real network packet transmission</li>
                <li>• Simplified MTU handling for educational purposes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Best Practices</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Use realistic SPI values (typically 32-bit integers)</li>
                <li>• Increment sequence numbers for multiple tests</li>
                <li>• Test both Transport and Tunnel modes</li>
                <li>• Experiment with various payload sizes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcedureSection;