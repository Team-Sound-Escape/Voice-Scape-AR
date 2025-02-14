import React from 'react';
import { Card, CardContent } from '../ui/card';

const Mockup1 = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Card className="w-full bg-gradient-to-br from-gray-900 to-black text-white">
        <CardContent className="p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              VoiceScape Quest - Multimodal AR Experience
            </h2>
            <p className="text-gray-400 mt-2">Complete Step-by-Step Interaction Flow</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Step 1: Environment Setup & World Scanning */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Environment scanning effect */}
                  <div className="absolute inset-0">
                    <div className="h-full w-full grid grid-cols-12 grid-rows-8">
                      {[...Array(96)].map((_, i) => (
                        <div key={i} 
                             className="border border-blue-500/10 transition-all duration-1000"
                             style={{
                               opacity: 0.3 + (Math.sin(i * 0.5) * 0.2),
                               animation: 'pulse 2s infinite',
                               animationDelay: `${i * 50}ms`
                             }}
                        ></div>
                      ))}
                    </div>

                    {/* Floor detection highlight */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                    
                    {/* Wall detection highlights */}
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-blue-500/20 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                  </div>
                  
                  {/* Scan indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-96 h-96 border-2 border-blue-400/30 rounded-full animate-ping"></div>
                    <div className="absolute w-96 h-96 border border-blue-300/20 rounded-full animate-ping" style={{animationDelay: '300ms'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-black/70 backdrop-blur-sm border border-blue-500/30 rounded-lg px-4 py-2">
                        <div className="text-sm text-blue-300 font-mono">SCANNING ENVIRONMENT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Environment Analysis: World mesh scanning and spatial mapping using optimized World Query</p>
            </div>

            {/* Step 2: Voice Activation */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Voice activation rings */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} 
                           className="absolute border-2 rounded-full"
                           style={{
                             width: `${(i + 1) * 120}px`,
                             height: `${(i + 1) * 120}px`,
                             borderColor: `rgba(168, 85, 247, ${0.4 - i * 0.1})`,
                             animation: 'ping 2s infinite',
                             animationDelay: `${i * 0.5}s`
                           }}
                      >
                        <div className="absolute inset-0 rounded-full"
                             style={{
                               background: `radial-gradient(circle, rgba(168, 85, 247, ${0.1 - i * 0.02}) 0%, transparent 70%)`
                             }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Initial command */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black/70 backdrop-blur-lg border border-purple-500/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-300 font-mono">"Start Session"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Voice Interface: Hands-free command system with spatial audio feedback</p>
            </div>

            {/* Step 3: Grid Creation */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Pink beams */}
                  {[...Array(8)].map((_, i) => (
                    <div key={i}
                         className="absolute h-full w-1 bg-gradient-to-b from-[#FF00FF] to-transparent"
                         style={{
                           left: `${i * 12.5 + 6}%`,
                           opacity: 0.3,
                           transform: `rotate(${i % 2 ? 5 : -5}deg)`,
                           animation: 'pulse 2s infinite',
                           animationDelay: `${i * 100}ms`
                         }}
                    ></div>
                  ))}

                  {/* Grid system */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 perspective-1000">
                    <div className="grid grid-cols-4 grid-rows-4 gap-2 transform rotate-x-60">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} 
                             className="bg-black border-2 border-blue-500/30 rounded-sm relative group transition-all duration-300">
                          <div className="absolute inset-1 bg-blue-500/10 rounded-sm group-hover:bg-blue-500/20"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Mix grid initialization</p>
            </div>

            {/* Scene 4: AR Mix Board */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Grid system with active blocks */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 perspective-1000">
                    <div className="grid grid-cols-4 grid-rows-4 gap-2 transform rotate-x-60">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} 
                             className={`bg-black border-2 ${i % 3 === 0 ? 'border-blue-500/60' : 'border-blue-500/30'} 
                                       rounded-sm relative group transition-all duration-300 hover:border-purple-500/60`}>
                          <div className={`absolute inset-1 rounded-sm transition-all duration-300
                            ${i % 3 === 0 ? 'bg-blue-500/30 animate-pulse' : 'bg-blue-500/10 group-hover:bg-purple-500/20'}`}></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BPM display */}
                  <div className="absolute top-8 right-8">
                    <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
                      <div className="text-blue-400 font-mono text-2xl">195 BPM</div>
                    </div>
                  </div>

                  {/* Pink beams */}
                  {[...Array(8)].map((_, i) => (
                    <div key={i}
                         className="absolute h-full w-1 bg-gradient-to-b from-[#FF00FF] to-transparent"
                         style={{
                           left: `${i * 12.5 + 6}%`,
                           opacity: 0.3,
                           transform: `rotate(${i % 2 ? 5 : -5}deg)`,
                           animation: 'pulse 2s infinite',
                           animationDelay: `${i * 100}ms`
                         }}
                    ></div>
                  ))}

                  {/* Gesture zone */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-32 h-32 border-2 border-purple-500/30 rounded-full"></div>
                      <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-ping"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <span className="text-purple-300 font-mono text-sm">GESTURE ZONE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">AR Mix Board: Hand gestures place sound blocks into the grid</p>
            </div>

            {/* Scene 5: Interaction Preview */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Audio ray visualization */}
                  {[...Array(12)].map((_, i) => (
                    <div key={i}
                         className="absolute left-1/2 h-full w-1 bg-gradient-to-t from-purple-500/0 via-purple-500/40 to-purple-500/0"
                         style={{
                           transform: `translateX(-50%) rotate(${i * 30}deg)`,
                           transformOrigin: 'bottom',
                           animation: 'pulse 2s infinite',
                           animationDelay: `${i * 100}ms`
                         }}
                    ></div>
                  ))}

                  {/* Drop zone preview */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-24 h-24 border-2 border-blue-500/50 rounded-sm animate-pulse"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <span className="text-blue-300 font-mono text-sm">DROP ZONE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Interaction Preview: Visual feedback for sound block placement</p>
            </div>

            {/* Scene 6: Voice Integration */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Command list */}
                  <div className="absolute top-8 left-8 space-y-2">
                    {[
                      { cmd: 'Add Bass', active: true },
                      { cmd: 'Change Loop', active: false },
                      { cmd: 'Save Pattern', active: false }
                    ].map(({ cmd, active }, i) => (
                      <div key={i} 
                           className={`bg-black/80 backdrop-blur-sm border ${active ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-lg p-3`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 ${active ? 'bg-purple-500 animate-pulse' : 'bg-purple-500/60'} rounded-full`}></div>
                          <span className={`${active ? 'text-purple-300' : 'text-purple-300/60'} font-mono text-sm`}>{cmd}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Active command display */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="text-center space-y-4">
                      <div className="text-xl text-purple-400 font-bold">Voice Command Active</div>
                      <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2">
                        <div className="text-sm text-purple-300 font-mono">"Add Bass Pattern"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Voice Commands: Seamless integration with gesture controls</p>
            </div>

            {/* Scene 7: Audio Visualization & Fractals */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-cover rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60">
                  {/* Enhanced neon grid floor */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 perspective-1000">
                    <div className="h-full grid grid-cols-8 transform rotate-x-60">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="border-t border-l border-purple-500/30 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced audio reactive fractals */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute">
                        <div className="w-40 h-40 border border-purple-500/20 transform"
                             style={{
                               transform: `rotate(${i * 30}deg) scale(${1 + i * 0.2})`,
                               animation: 'pulse 2s infinite',
                               animationDelay: `${i * 0.2}s`
                             }}>
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced audio waveform */}
                  <div className="absolute bottom-0 left-0 right-0 h-32">
                    <div className="flex items-end justify-around h-full">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="relative">
                          <div className="w-1 bg-gradient-to-t from-purple-600/80 to-blue-400/80 rounded-t-sm"
                               style={{
                                 height: `${30 + Math.sin(i * 0.5) * 50}%`,
                                 animation: 'bounce 1s infinite',
                                 animationDelay: `${i * 0.05}s`
                               }}>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-purple-500/20 to-transparent blur-sm"
                               style={{
                                 height: `${20 + Math.sin(i * 0.5) * 40}%`,
                                 animation: 'bounce 1s infinite',
                                 animationDelay: `${i * 0.05}s`
                               }}>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Audio Visualization: Real-time FFT analysis driving procedural fractal generation</p>
            </div>

            {/* Scene 8: Full Experience Integration */}
            <div className="lg:col-span-3 space-y-3">
              <div className="aspect-video bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Background grid */}
                  <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-20">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-blue-500/30"></div>
                    ))}
                  </div>

                  {/* Active sound blocks */}
                  <div className="absolute bottom-12 left-0 right-0 h-32">
                    <div className="grid grid-cols-8 gap-2 h-full px-4">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} 
                             className={`bg-gradient-to-t ${i % 2 === 0 ? 'from-purple-500/40' : 'from-blue-500/40'} to-transparent 
                                       rounded-sm animate-pulse`}
                             style={{animationDelay: `${i * 0.2}s`}}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3">
                    <div className="space-y-1 text-sm font-mono">
                      <div className="text-purple-300">Pattern Active</div>
                      <div className="text-blue-300">4 Layers Playing</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Complete Experience: Multimodal interaction with real-time feedback</p>
            </div>

          </div>

          <div className="mt-8 p-6 bg-purple-900/10 rounded-lg border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Interaction Flow Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-blue-300 mb-2">Setup Phase</h4>
                <ul className="space-y-1.5 text-gray-300">
                  <li>• Environment scanning and mapping</li>
                  <li>• Voice system activation</li>
                  <li>• Grid system initialization</li>
                  <li>• Gesture tracking setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-300 mb-2">Creation Phase</h4>
                <ul className="space-y-1.5 text-gray-300">
                  <li>• Sound block manipulation (gestures + drop zones)</li>
                  <li>• Voice command control</li>
                  <li>• Real-time audio visualization</li>
                  <li>• Multi-modal switching</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mockup1;