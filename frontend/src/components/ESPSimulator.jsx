import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Sidebar from "./Sidebar";
import AimSection from "./AimSection";
import TheorySection from "./TheorySection";
import ObjectiveSection from "./ObjectiveSection";
import ProcedureSection from "./ProcedureSection";
import SimulationSection from "./SimulationSection";

const ESPSimulator = () => {
  const [activeSection, setActiveSection] = useState("aim");

  const renderContent = () => {
    switch (activeSection) {
      case "aim":
        return <AimSection />;
      case "theory":
        return <TheorySection />;
      case "objective":
        return <ObjectiveSection />;
      case "procedure":
        return <ProcedureSection />;
      case "simulation":
        return <SimulationSection />;
      default:
        return <AimSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" style={{ backgroundColor: "#0c0f14" }}>
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="relative bg-black/20 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 lg:pl-8">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4 font-mono tracking-wider">
                  [IPSec_ESP_Simulation]
                </h1>
                <p className="text-sm md:text-lg text-emerald-300 max-w-3xl mx-auto lg:mx-0 font-mono">
                  {'>> Advanced_Encapsulating_Security_Protocol_Platform <<'}
                </p>
                <div className="text-xs md:text-sm text-cyan-400 mt-2 font-mono">
                  {new Date().toISOString().split('T')[0]} {new Date().toISOString().split('T')[1].slice(0, 8)} | STATUS: ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-12 lg:pl-8">
          <Card className="bg-black/30 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardContent className="p-4 md:p-8">
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ESPSimulator;