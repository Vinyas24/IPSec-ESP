import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import AimSection from "./AimSection";
import ObjectiveSection from "./ObjectiveSection";
import ProcedureSection from "./ProcedureSection";
import SimulationSection from "./SimulationSection";
import { Shield, Target, BookOpen, PlayCircle } from "lucide-react";

const ESPSimulator = () => {
  const [activeTab, setActiveTab] = useState("aim");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" style={{ backgroundColor: "#0c0f14" }}>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl"></div>
        <div className="relative bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4 font-mono tracking-wider">
                [IPSec_ESP_Simulation]
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-emerald-300 max-w-2xl mx-auto font-mono">
                >> Advanced_Encapsulating_Security_Protocol_Platform <<
              </p>
              <div className="text-xs md:text-sm text-cyan-400 mt-2 font-mono">
                {new Date().toISOString().replace('T', ' ').slice(0, 19)} | STATUS: ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <Card className="bg-black/30 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/60 backdrop-blur-md border-2 border-emerald-500/40 p-2 rounded-2xl shadow-2xl">
                <TabsTrigger 
                  value="aim" 
                  className="flex items-center gap-2 text-emerald-300 font-mono text-sm md:text-base px-2 md:px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-emerald-300 transition-all duration-500 rounded-xl hover:bg-emerald-500/20"
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:block">AIM</span>
                  <span className="sm:hidden">A</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="objective" 
                  className="flex items-center gap-2 text-emerald-300 font-mono text-sm md:text-base px-2 md:px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-emerald-300 transition-all duration-500 rounded-xl hover:bg-emerald-500/20"
                >
                  <Shield className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:block">OBJECTIVE</span>
                  <span className="sm:hidden">O</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="procedure" 
                  className="flex items-center gap-2 text-emerald-300 font-mono text-sm md:text-base px-2 md:px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-emerald-300 transition-all duration-500 rounded-xl hover:bg-emerald-500/20"
                >
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:block">PROCEDURE</span>
                  <span className="sm:hidden">P</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="simulation" 
                  className="flex items-center gap-2 text-emerald-300 font-mono text-sm md:text-base px-2 md:px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-xl data-[state=active]:border data-[state=active]:border-emerald-300 transition-all duration-500 rounded-xl hover:bg-emerald-500/20"
                >
                  <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:block">SIMULATION</span>
                  <span className="sm:hidden">S</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="aim" className="mt-0">
                <AimSection />
              </TabsContent>
              
              <TabsContent value="objective" className="mt-0">
                <ObjectiveSection />
              </TabsContent>
              
              <TabsContent value="procedure" className="mt-0">
                <ProcedureSection />
              </TabsContent>
              
              <TabsContent value="simulation" className="mt-0">
                <SimulationSection />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ESPSimulator;