type drawCircleProps = {
  matrix: number[][] | null,
  x: number,
  y: number,
  radius: number
}

function generateCircle(
  { matrix, x, y, radius }: drawCircleProps
) {
  if (radius === 0) return
  // this flip is for using only bottom right part of coordinate plane, since DOM matrix indexes start at top left
  if (y !== 0) y *= -1

  let i, angle, x1, y1;
  const matrixHeight = matrix?.length
  const matrixWidth = matrix[0]?.length

  // by lowering smth in <i += smth> you can paint larger matrixes, but that`s not needed for small matrixes

  for (i = 0; i < 360; i += 1) {
    angle = i;
    x1 = Math.round(radius * Math.cos(angle * Math.PI / 180));
    y1 = Math.round(radius * Math.sin(angle * Math.PI / 180));
    // if(matrix[(y + y1) * -1][x + x1] === 0) return

    if (
      x1 + x >= 0 && x1 + x < matrixWidth &&
      y1 + y <= 0 && y1 + y > -matrixHeight
    )
      matrix[(y + y1) * -1][x + x1] = 0
  }
}

export default generateCircle
