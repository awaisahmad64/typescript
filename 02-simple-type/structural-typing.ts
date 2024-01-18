interface point {
  x: number;
  y: number;
}
function logPoint(p: point) {
  console.log(`${p.x}, ${p.y}`);
}
const point = {
  x: 12,
  y: 13,
};
logPoint(point);
