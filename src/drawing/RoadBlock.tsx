import { canvasInfo } from "../components/Canvas";

export class RoadBlockX {
  width: number = 20;
  height: number = 40;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    ctx.fillStyle = "red";
    ctx.fillRect(
      canvasInfo.canvasWidth / 2 + 20,
      canvasInfo.canvasHeight / 2 - 20,
      this.width,
      this.height
    );
  }

  hide() {
    this.ctx.clearRect(
      canvasInfo.canvasWidth / 2 + 20,
      canvasInfo.canvasHeight / 2 - 20,
      this.width + 0.5,
      this.height
    );
  }

  unhide() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      canvasInfo.canvasWidth / 2 + 20,
      canvasInfo.canvasHeight / 2 - 20,
      this.width,
      this.height
    );
  }
}

export class CautionBlockX {
  width: number = 20;
  height: number = 40;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    ctx.fillStyle = "orange";
    ctx.fillRect(
      canvasInfo.canvasWidth / 2 + 20,
      canvasInfo.canvasHeight / 2 - 20,
      this.width,
      this.height
    );
  }

  hide() {
    this.ctx.clearRect(
      canvasInfo.canvasWidth / 2 + 20,
      canvasInfo.canvasHeight / 2 - 20,
      this.width + 0.5,
      this.height
    );
  }

  unhide() {
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(
      canvasInfo.canvasWidth / 2 + 20,
      canvasInfo.canvasHeight / 2 - 20,
      this.width,
      this.height
    );
  }
}

export class RoadBlockY {
  width: number = 40;
  height: number = 20;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    ctx.fillStyle = "red";
    ctx.fillRect(
      canvasInfo.canvasWidth / 2 - 20,
      canvasInfo.canvasHeight / 2 + 20,
      this.width,
      this.height
    );
  }

  hide() {
    this.ctx.clearRect(
      canvasInfo.canvasWidth / 2 - 19.5,
      canvasInfo.canvasHeight / 2 + 20,
      this.width - 0.5,
      this.height
    );
  }

  unhide() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      canvasInfo.canvasWidth / 2 - 20,
      canvasInfo.canvasHeight / 2 + 20,
      this.width,
      this.height
    );
  }
}

export class CautionBlockY {
  width: number = 40;
  height: number = 20;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    ctx.fillStyle = "orange";
    ctx.fillRect(
      canvasInfo.canvasWidth / 2 - 20,
      canvasInfo.canvasHeight / 2 + 20,
      this.width,
      this.height
    );
  }

  hide() {
    this.ctx.clearRect(
      canvasInfo.canvasWidth / 2 - 19.5,
      canvasInfo.canvasHeight / 2 + 20,
      this.width - 0.5,
      this.height
    );
  }

  unhide() {
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(
      canvasInfo.canvasWidth / 2 - 20,
      canvasInfo.canvasHeight / 2 + 20,
      this.width,
      this.height
    );
  }
}
