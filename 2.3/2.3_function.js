'use strict'

function circleArea(radius) {
  return Math.PI * radius ** 2;
}

let area = circleArea(3);
console.log(area);
let areaRounded = area.toFixed(2);
console.log(areaRounded);
