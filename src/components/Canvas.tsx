import React, { useRef, useEffect } from "react";

//DRAWING
import initMap from "../utils/initMap";

//STATE
import entityManager from "../utils/entityManager";

//CANVAS INFO
export const canvasInfo = {
  canvasWidth: 0,
  canvasHeight: 0,
};

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  let ctx: CanvasRenderingContext2D | null;

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      ctx = canvasCtxRef.current;

      canvasInfo.canvasWidth = canvasRef.current.offsetWidth;
      canvasInfo.canvasHeight = canvasRef.current.offsetHeight;

      if (ctx) {
        initMap(
          ctx,
          canvasRef.current.offsetWidth,
          canvasRef.current.offsetHeight
        );
        entityManager(ctx);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="mainCanvas"
      width={window.innerWidth * 0.8}
      height={window.innerHeight * 0.9}
    />
  );
};

export default Canvas;
