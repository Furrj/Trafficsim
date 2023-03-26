import { canvasInfo } from "../components/Canvas";

export class XCar {
  id: number;
  ctx: CanvasRenderingContext2D;
  width: number = 50;
  height: number = 20;
  xPos: number;
  isAllowedToMove = true;

  constructor(xPos: number, ctx: CanvasRenderingContext2D, id: number) {
    this.id = id;
    this.xPos = xPos;
    this.ctx = ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(
      this.xPos,
      canvasInfo.canvasHeight / 2 - 10,
      this.width,
      this.height
    );
  }

  move(x: number): void {
    if (this.isAllowedToMove) {
      this.ctx.clearRect(
        this.xPos,
        canvasInfo.canvasHeight / 2 - 10,
        this.width,
        this.height
      );
      this.xPos += x;
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(
        this.xPos,
        canvasInfo.canvasHeight / 2 - 10,
        this.width,
        this.height
      );
    }
  }

  setAllowed(newBool: boolean) {
    this.isAllowedToMove = newBool;
  }

  type(): string {
    return "XCar";
  }
}

export class YCar {
  id: number;
  ctx: CanvasRenderingContext2D;
  width: number = 20;
  height: number = 50;
  yPos: number;

  constructor(yPos: number, ctx: CanvasRenderingContext2D, id: number) {
    this.id = id;
    this.yPos = yPos;
    this.ctx = ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(
      canvasInfo.canvasWidth / 2 - 10,
      this.yPos,
      this.width,
      this.height
    );
  }

  move(x: number): void {
    this.ctx.clearRect(
      canvasInfo.canvasWidth / 2 - 12,
      this.yPos,
      this.width + 5,
      this.height
    );
    this.yPos += x;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
      canvasInfo.canvasWidth / 2 - 10,
      this.yPos,
      this.width,
      this.height
    );
  }
}
