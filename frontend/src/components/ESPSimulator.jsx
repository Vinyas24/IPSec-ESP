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
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                IPSec ESP Simulation
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Advanced Encapsulating Security Protocol Simulation Platform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <Card className="bg-black/30 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/40 backdrop-blur-sm border border-white/20 p-1 rounded-xl">
                <TabsTrigger 
                  value="aim" 
                  className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Target className="w-4 h-4" />
                  AIM
                </TabsTrigger>
                <TabsTrigger 
                  value="objective" 
                  className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Shield className="w-4 h-4" />
                  OBJECTIVE
                </TabsTrigger>
                <TabsTrigger 
                  value="procedure" 
                  className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  PROCEDURE
                </TabsTrigger>
                <TabsTrigger 
                  value="simulation" 
                  className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <PlayCircle className="w-4 h-4" />
                  SIMULATION
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