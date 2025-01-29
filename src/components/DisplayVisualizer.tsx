import React, { useState } from 'react';
import { motion } from 'framer-motion';

const displayProperties = [
  {
    value: 'block',
    description: 'Takes up the full width available, with line breaks before and after',
  },
  {
    value: 'inline',
    description: 'Takes up only the space it needs, allows elements next to it',
  },
  {
    value: 'inline-block',
    description: 'Flows like inline but can have width and height',
  },
  {
    value: 'flex',
    description: 'Creates a flexible container for layout',
  },
  {
    value: 'grid',
    description: 'Creates a grid container for two-dimensional layout',
  },
  {
    value: 'none',
    description: 'Removes the element from the document flow',
  },
];

const DisplayVisualizer = () => {
  const [selectedDisplay, setSelectedDisplay] = useState('block');

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">CSS Display Visualizer</h1>
          <p className="text-lg text-gray-400">
            Understand how the display property affects layout
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 rounded-lg space-y-4"
          >
            <h2 className="text-xl font-semibold">Select Display Property</h2>
            <div className="space-y-2">
              {displayProperties.map((prop) => (
                <button
                  key={prop.value}
                  onClick={() => setSelectedDisplay(prop.value)}
                  className={`w-full p-3 rounded-md transition-all duration-200 ${
                    selectedDisplay === prop.value
                      ? 'bg-white/10 border border-white/20'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <span className="font-mono">{prop.value}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2 glass p-6 rounded-lg space-y-4"
          >
            <h2 className="text-xl font-semibold">Live Preview</h2>
            <div className="h-[300px] rounded-md bg-gray-900/50 p-4 overflow-auto">
              <div className="space-y-4">
                <div
                  className="preview-element"
                  style={{ display: selectedDisplay as any }}
                >
                  Element 1
                </div>
                <div
                  className="preview-element"
                  style={{ display: selectedDisplay as any }}
                >
                  Element 2
                </div>
                <div
                  className="preview-element"
                  style={{ display: selectedDisplay as any }}
                >
                  Element 3
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-md bg-gray-900/50">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-400">
                {displayProperties.find((p) => p.value === selectedDisplay)?.description}
              </p>
            </div>

            <div className="mt-4 p-4 rounded-md bg-gray-900/50 font-mono">
              <pre className="text-sm">
                {`.element {
  display: ${selectedDisplay};
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DisplayVisualizer;