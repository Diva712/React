import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // Initial background color

  const handleClick = (newColor) => {
    setColor(newColor); // Update the state with the new color
  };

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        {/* Background color is now dynamically set using the state */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 pr-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-yellow-50 px-4 py-3 rounded-xl">
            <button
              onClick={() => handleClick("red")} // Pass the new color to handleClick
              className="outline-none px-4 py-2 rounded-full text-white shadow-sm"
            >
              Red
            </button>
            <button
              onClick={() => handleClick("black")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-sm"
            >
              Black
            </button>
            {/* ... other buttons with similar onClick handlers */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
