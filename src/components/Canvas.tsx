import React, { useRef, useEffect, useState } from "react";

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 10;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setDrawing(false);
  };

  const continueDrawing = ({ nativeEvent }) => {
    if (!drawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  console.log(canvasRef);
  return (
    <div>
      <div className="flex justify-center ">
        <button
          className="border w-full p-4 border-slate-500"
          onClick={() => {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
          }}
        >
          Clear{" "}
        </button>
      </div>
      <canvas
        className="fixed top-13 left-1/2 z-0"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onMouseUp={stopDrawing}
      />
    </div>
  );
}

export default DrawingCanvas;
