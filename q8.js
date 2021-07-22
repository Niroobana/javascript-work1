const points = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
document.getElementById("q8").innerHTML = myArrayMax(points);
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
document.getElementById("q8.1").innerHTML = myArrayMin(points);
