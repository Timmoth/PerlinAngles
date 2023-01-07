const { createNoise3D, createNoise2D } = require("simplex-noise");

export class PerlinAngles {
  width: number;
  height: number;
  cols: number;
  rows: number;
  noise = createNoise3D();
  noise2d = createNoise2D();
  size = 10;
  dt = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.cols = width / this.size;
    this.rows = height / this.size;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.dt += 0.01;
    for (let i = 0; i <= this.cols; i++) {
      for (let j = 0; j <= this.rows; j++) {
        var noise = this.noise(i / this.cols, j / this.rows, this.dt);
        this.drawDot(ctx, i, j, noise);
      }
    }
  }

  drawDot(ctx: CanvasRenderingContext2D, x: number, y: number, noise: number) {
    var val = (noise + 1) / 2;
    ctx.strokeStyle = "hsl(" + val * 360 + ",100%,50%)";
    ctx.lineWidth = 4;
    ctx.save();
    ctx.translate(x * this.size, y * this.size);
    ctx.rotate(noise);
    ctx.beginPath();
    ctx.moveTo(0, this.size / 2);
    ctx.lineTo(this.size, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
