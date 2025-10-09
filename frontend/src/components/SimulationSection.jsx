import React, { useState } from "react";
import InputPanel from "./InputPanel";
import ResultPanel from "./ResultPanel";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PlayCircle, RotateCcw } from "lucide-react";

const SimulationSection = () => {
  const [simulationResult, setSimulationResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulation = async (inputData) => {
    setIsSimulating(true);
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const result = generateESPResult(inputData);
    setSimulationResult(result);
    setIsSimulating(false);
  };

  const generateESPResult = (input) => {
    const espHeaderSize = 8; 
    const ivSize = input.mode === "tunnel" ? 16 : 8; 
    const paddingSize = calculatePadding(input.payloadSize);
    const trailerSize = 2; 
    const authSize = 12; 
    
    const totalOverhead = espHeaderSize + ivSize + paddingSize + trailerSize + authSize;
    const totalPacketSize = input.payloadSize + totalOverhead;
    
    const mtuExceeded = input.mtu && totalPacketSize > input.mtu;
    
    return {
      spi: input.spi,
      sequenceNumber: input.sequenceNumber,
      mode: input.mode,
      payloadSize: input.payloadSize,
      espHeaderSize,
      ivSize,
      paddingSize,
      trailerSize,
      authSize,
      totalOverhead,
      totalPacketSize,
      mtu: input.mtu,
      status: mtuExceeded ? "Dropped (exceeds MTU)" : "Accepted",
      timestamp: new Date().toISOString(),
      encapsulationSteps: generateEncapsulationSteps(input, totalOverhead),
      packetStructure: generatePacketStructure(input, {
        espHeaderSize,
        ivSize,
        paddingSize,
        trailerSize,
        authSize
      })
    };
  };

  const calculatePadding = (payloadSize) => {
    const blockSize = 4;
    const paddingNeeded = (blockSize - (payloadSize % blockSize)) % blockSize;
    return Math.max(paddingNeeded, 4); 
  };

  const generateEncapsulationSteps = (input, overhead) => [
    {
      step: 1,
      action: "Original IP Packet Analysis",
      description: `Processing ${input.payloadSize} bytes of payload data from ${input.sender} to ${input.receiver}`
    },
    {
      step: 2,
      action: "ESP Header Construction",
      description: `Inserting ESP header with SPI: ${input.spi}, Sequence: ${input.sequenceNumber}`
    },
    {
      step: 3,
      action: `${input.mode.charAt(0).toUpperCase() + input.mode.slice(1)} Mode Processing`,
      description: input.mode === "tunnel" 
        ? "Creating new IP header for tunnel mode encapsulation"
        : "Preserving original IP header for transport mode"
    },
    {
      step: 4,
      action: "Padding and Trailer Addition",
      description: `Adding padding and ESP trailer for protocol compliance`
    },
    {
      step: 5,
      action: "Authentication Processing",
      description: `Mock authentication data generation (${overhead} bytes total overhead)`
    }
  ];

  const generatePacketStructure = (input, sizes) => {
    const structure = [];
    
    if (input.mode === "tunnel") {
      structure.push({ name: "New IP Header", size: 20, color: "bg-purple-500" });
    }
    
    structure.push(
      { name: "ESP Header", size: sizes.espHeaderSize, color: "bg-emerald-500" },
      { name: "IV", size: sizes.ivSize, color: "bg-teal-500" },
      { name: "Original Data", size: input.payloadSize, color: "bg-cyan-500" },
      { name: "Padding", size: sizes.paddingSize, color: "bg-blue-500" },
      { name: "ESP Trailer", size: sizes.trailerSize, color: "bg-indigo-500" },
      { name: "Auth Data", size: sizes.authSize, color: "bg-violet-500" }
    );
    
    return structure;
  };

  const handleReset = () => {
    setSimulationResult(null);
    setIsSimulating(false);
  };

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
            <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
            <CardTitle className="text-lg md:text-2xl lg:text-3xl font-bold text-emerald-400 font-mono">ESP SIMULATION</CardTitle>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-emerald-300 max-w-3xl mx-auto leading-relaxed font-mono">
            {'Configure ESP parameters & execute real time simulation(protocol behavior)'}
          </p>
        </CardHeader>
      </Card>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-8">
        <div className="order-1">
          <InputPanel 
            onSimulate={handleSimulation} 
            isSimulating={isSimulating}
            onReset={handleReset}
            hasResult={!!simulationResult}
          />
        </div>

        <div className="order-2">
          <ResultPanel 
            result={simulationResult} 
            isSimulating={isSimulating}
          />
        </div>
      </div>
    </div>
  );
};

export default SimulationSection;