// var fruits = ["Apple","Banana"];
// function fadd() {
//   fruits.splice(1, 0, "Lemon", "mango","pineapple");
//   }
//   document.getElementById("q9").innerHTML = "New Array:<br>" + fadd(fruits);
  const fruits = ["Apple","Banana"];
  fruits.splice(1, 0, "Lemon", "mango","pineapple");

  document.getElementById("q9").innerHTML = "New Array:"+fruits;
document.getElementById("q9.1").innerHTML = "Index 3 fruit:"+fruits[3];
document.getElementById("q9.2").innerHTML = "length of array:"+fruits.length;
document.getElementById("q9.3").innerHTML = "Reverse of array:"+fruits.reverse();
