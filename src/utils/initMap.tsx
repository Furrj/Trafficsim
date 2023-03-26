const initMap = (
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number
): void => {
  //ROADS
  ctx.fillStyle = "black";
  //Right
  ctx.fillRect(canvasWidth / 2 + 25, canvasHeight / 2 + 20, canvasWidth / 2, 5);
  ctx.fillRect(canvasWidth / 2 + 25, canvasHeight / 2 - 25, canvasWidth / 2, 5);
  //Left
  ctx.fillRect(0, canvasHeight / 2 + 20, canvasWidth / 2 - 25, 5);
  ctx.fillRect(0, canvasHeight / 2 - 25, canvasWidth / 2 - 25, 5);
  //Top
  ctx.fillRect(canvasWidth / 2 - 25, 0, 5, canvasHeight / 2 - 20);
  ctx.fillRect(canvasWidth / 2 + 20, 0, 5, canvasHeight / 2 - 20);
  //Bottom
  ctx.fillRect(
    canvasWidth / 2 - 25,
    canvasHeight / 2 + 20,
    5,
    canvasHeight / 2 - 20
  );
  ctx.fillRect(
    canvasWidth / 2 + 20,
    canvasHeight / 2 + 20,
    5,
    canvasHeight / 2 - 20
  );

  //Grass
  ctx.fillStyle = "green";
  //Top left
  ctx.fillRect(0, 0, canvasWidth / 2 - 25, canvasHeight / 2 - 25);
  //Top right
  ctx.fillRect(
    canvasWidth / 2 + 25,
    0,
    canvasWidth / 2 - 25,
    canvasHeight / 2 - 25
  );
  //Bottom left
  ctx.fillRect(
    0,
    canvasHeight / 2 + 25,
    canvasWidth / 2 - 25,
    canvasHeight / 2 - 25
  );
  //Bottom right
  ctx.fillRect(
    canvasWidth / 2 + 25,
    canvasHeight / 2 + 25,
    canvasWidth / 2 - 25,
    canvasHeight / 2 - 25
  );
};

export default initMap;
