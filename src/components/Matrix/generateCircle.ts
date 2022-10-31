import { Point } from "./useTileGenerator"

type drawCircleProps = {
  matrix: Point[][],
  x: number,
  y: number,
  delay: number,
  iteration: number
}

function generateCircle(
  { matrix, x, y, delay, iteration }: drawCircleProps
) {
  if (!matrix) return
  if (iteration === 0) return
  // this flip is for using only bottom right part of coordinate plane, since DOM matrix indexes start at top left
  if (y !== 0) y *= -1

  let i, angle, x1, y1;
  const matrixHeight = matrix.length
  const matrixWidth: number = matrix[0]?.length || 0

  // by lowering smth in <i += smth> you can paint larger matrixes, but that`s not needed for small matrixes

  for (i = 0; i < 360; i += 1) {
    angle = i;
    x1 = Math.round(iteration * Math.cos(angle * Math.PI / 180));
    y1 = Math.round(iteration * Math.sin(angle * Math.PI / 180));
    if (
      x1 + x >= 0 && x1 + x < matrixWidth &&
      y1 + y <= 0 && y1 + y > -matrixHeight
    ) {
      const row = matrix[(y + y1) * -1]
      if (row !== undefined) {
        row[x + x1] = iteration * delay
      }
    }
  }
}

export default generateCircle
