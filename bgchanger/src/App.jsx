import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("#1e293b");
  const [gradient, setGradient] = useState(false);
  const [secondColor, setSecondColor] = useState("");
  const [colorHistory, setColorHistory] = useState([]);
  const [customColorOne, setCustomColorOne] = useState("#1e293b");
  const [customColorTwo, setCustomColorTwo] = useState("#ffffff");
  const [isCustomGradient, setIsCustomGradient] = useState(false);

  const handleColorChange = (newColor) => {
    setcolor(newColor);
    setColorHistory((prev) => [...prev.slice(-4), newColor]);
  };

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setcolor(randomColor);
  };

  const applyCustomGradient = () => {
    setcolor(customColorOne);
    setSecondColor(customColorTwo);
    setGradient(true);
    setIsCustomGradient(true);
  };

  const colors = [
    { name: "Slate", code: "#1e293b" },
    { name: "White", code: "#ffffff" },
    { name: "Black", code: "#000000" },
    { name: "Blue", code: "#1d4ed8" },
    { name: "Pink", code: "#ec4899" },
    { name: "Red", code: "#dc2626" },
    { name: "Green", code: "#16a34a" },
    { name: "Yellow", code: "#ca8a04" },
    { name: "Purple", code: "#7e22ce" },
    { name: "Orange", code: "#ea580c" },
    { name: "Teal", code: "#0d9488" },
    { name: "Indigo", code: "#4f46e5" },
    { name: "Brown", code: "#92400e" },
    { name: "Gray", code: "#4b5563" },
    { name: "Cyan", code: "#0891b2" },
    { name: "Lime", code: "#65a30d" },
    { name: "Rose", code: "#e11d48" },
    { name: "Emerald", code: "#059669" },
    { name: "Amber", code: "#d97706" },
    { name: "Violet", code: "#7c3aed" },
    { name: "Coral", code: "#FF7F50" },
    { name: "Crimson", code: "#DC143C" },
    { name: "DeepPink", code: "#FF1493" },
    { name: "MediumPurple", code: "#9370DB" },
    { name: "RebeccaPurple", code: "#663399" },
    { name: "DodgerBlue", code: "#1E90FF" },
    { name: "DeepSkyBlue", code: "#00BFFF" },
    { name: "MediumSpringGreen", code: "#00FA9A" },
    { name: "LimeGreen", code: "#32CD32" },
    { name: "Gold", code: "#FFD700" },
    { name: "DarkOrange", code: "#FF8C00" },
    { name: "Chocolate", code: "#D2691E" },
    { name: "Sienna", code: "#A0522D" },
    { name: "Plum", code: "#DDA0DD" },
    { name: "Orchid", code: "#DA70D6" },
    { name: "Turquoise", code: "#40E0D0" },
    { name: "CornflowerBlue", code: "#6495ED" },
    { name: "HotPink", code: "#FF69B4" },
    { name: "Tomato", code: "#FF6347" },
    { name: "MediumSeaGreen", code: "#3CB371" },
  ];

  return (
    <div
      className="min-h-screen duration-500 transition-colors"
      style={{
        background: gradient
          ? `linear-gradient(45deg, ${color}, ${secondColor || color})`
          : color,
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-6xl font-bold py-8 mb-12 text-white drop-shadow-lg animate-fadeIn">
          Background Color Generator
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {colors.map((colorObj) => (
            <button
              key={colorObj.name}
              onClick={() => handleColorChange(colorObj.code)}
              className="transform hover:scale-105 transition-all duration-300 bg-white/90 hover:bg-white 
                       text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg 
                       hover:shadow-xl backdrop-blur-sm"
              style={{
                border: color === colorObj.code ? "3px solid white" : "none",
                animation: "bounce 1s infinite",
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: colorObj.code }}
                ></div>
                {colorObj.name}
              </div>
            </button>
          ))}
        </div>

        {/* Add below the main grid */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="w-full max-w-md flex gap-4">
            {/* Gradient Controls Box */}
            <div className="flex-grow bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-between">
                {/* Gradient Toggle */}
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={gradient}
                    onChange={(e) => setGradient(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-white text-lg">Enable Gradient</span>
                </label>

                {/* Current Color Display */}
                <div className="flex items-center gap-3">
                  <span className="text-white/80">Current:</span>
                  <code className="font-mono bg-white/10 px-3 py-1.5 rounded text-white">
                    {gradient ? `${color} → ${secondColor}` : color}
                  </code>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        gradient ? `${color}, ${secondColor}` : color
                      )
                    }
                    className="bg-white/10 text-white px-3 py-1.5 rounded hover:bg-white/20 
                     transition-colors flex items-center gap-2"
                    title="Copy color code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Random Color Button */}
            <button
              onClick={generateRandomColor}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 rounded-lg 
                transition-all duration-300 flex items-center gap-2 shadow-lg 
                hover:shadow-xl hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268z" />
              </svg>
              Random
            </button>
          </div>
        </div>

        {/* Custom Gradient Controls */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm w-full max-w-md">
            <h3 className="text-white text-xl font-semibold mb-4">
              Custom Gradient Mixer
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col items-center">
                <label className="text-white text-sm mb-2">Color 1</label>
                <input
                  type="color"
                  value={customColorOne}
                  onChange={(e) => setCustomColorOne(e.target.value)}
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
              </div>
              <div className="text-white text-2xl">+</div>
              <div className="flex flex-col items-center">
                <label className="text-white text-sm mb-2">Color 2</label>
                <input
                  type="color"
                  value={customColorTwo}
                  onChange={(e) => setCustomColorTwo(e.target.value)}
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <button
              onClick={applyCustomGradient}
              className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Apply Custom Gradient
            </button>
          </div>

          {/* Preview of custom gradient */}
          <div
            className="w-full max-w-md h-12 rounded-lg shadow-lg"
            style={{
              background: `linear-gradient(45deg, ${customColorOne}, ${customColorTwo})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
