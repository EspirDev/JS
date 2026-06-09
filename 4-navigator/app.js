let addressLat = 1;
let addressLong = 2;
let positionLat = 4; 
let positionLong = 6;
const distance = Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2);
console.log(distance);