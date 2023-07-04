import React, { useRef, useEffect, useState } from "react";

function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 10;
    contextRef.current = context;
  }, []);

  const startDrawing = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current?.closePath();
    setDrawing(false);
  };

  const continueDrawing = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (!drawing) {
      return;
    }
    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current?.lineTo(offsetX, offsetY);
    contextRef.current?.stroke();
  };

  console.log(canvasRef);
  return (
    <div>
      <div className="flex justify-center ">
        <button
          className="border w-full p-4 border-slate-500"
          onClick={() => {
            const canvas = canvasRef.current;
            const context = canvas?.getContext("2d");
            context?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
          }}
        >
          Clear{" "}
        </button>
      </div>
      <canvas
        className="fixed top-13 left-1/2 z-0"
        ref={canvasRef}
        onPointerDown={startDrawing}
        onPointerMove={continueDrawing}
        onPointerUp={stopDrawing}
      />
    </div>
  );
}

export default DrawingCanvas;
