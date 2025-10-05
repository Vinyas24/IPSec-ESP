import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Target, Shield, BookOpen, PlayCircle, Menu, X, Layers } from "lucide-react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "aim", label: "AIM", icon: Target, description: "Project Objectives" },
    { id: "theory", label: "THEORY", icon: Layers, description: "IPSec ESP Protocol" },
    { id: "objective", label: "OBJECTIVE", icon: Shield, description: "Learning Goals" },
    { id: "procedure", label: "PROCEDURE", icon: BookOpen, description: "Step-by-Step Guide" },
    { id: "simulation", label: "SIMULATION", icon: PlayCircle, description: "Interactive Lab" }
  ];

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-black/60 backdrop-blur-md border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/20 p-3"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 lg:z-40">
        <Card className="flex flex-col h-full bg-black/40 backdrop-blur-xl border-emerald-500/30 rounded-none border-r-2 border-l-0 border-t-0 border-b-0">
          {/* Header */}
          <div className="p-6 border-b border-emerald-500/20">
            <div className="text-center">
              <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wider mb-2">
                [ESP_SIMULATOR]
              </h1>
              <p className="text-xs text-emerald-300 font-mono">
                {'>> NAVIGATION_CONSOLE <<'}
              </p>
              <div className="text-xs text-cyan-400 mt-2 font-mono">
                STATUS: ONLINE | {new Date().toISOString().split('T')[0]}
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full justify-start p-4 h-auto font-mono transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-xl border border-emerald-300'
                    : 'bg-black/30 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center w-full">
                  <item.icon className="w-5 h-5 mr-3" />
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className={`text-xs ${activeSection === item.id ? 'text-black/70' : 'text-emerald-400/70'}`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-emerald-500/20">
            <div className="text-center text-xs text-emerald-400 font-mono">
              <div>ESP Protocol Simulator</div>
              <div className="text-cyan-400 mt-1">Version 2.0.1</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile Full-Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <Button
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-red-500/20 border-red-500/50 text-red-300 hover:bg-red-500/30 p-3"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full justify-center items-center p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wider mb-4">
                [ESP_SIMULATOR]
              </h1>
              <p className="text-emerald-300 font-mono">
                {'>> SELECT_NAVIGATION_TARGET <<'}
              </p>
            </div>

            {/* Navigation Items */}
            <div className="w-full max-w-sm space-y-4">
              {navigationItems.map((item, index) => (
                <Button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full justify-start p-6 h-auto font-mono transition-all duration-500 transform ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-2xl border-2 border-emerald-300 scale-105'
                      : 'bg-black/40 text-emerald-300 hover:bg-emerald-500/20 border-2 border-emerald-500/30 hover:border-emerald-500/60 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center w-full">
                    <item.icon className="w-6 h-6 mr-4" />
                    <div className="flex-1 text-left">
                      <div className="text-lg font-bold">{item.label}</div>
                      <div className={`text-sm ${activeSection === item.id ? 'text-black/70' : 'text-emerald-400/70'}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center text-sm text-emerald-400 font-mono">
              <div>ESP Protocol Simulator</div>
              <div className="text-cyan-400 mt-1">Mobile Interface Active</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;