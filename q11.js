var foods = ["rice", "pizza", "sandwich", "rolls"];
foods.pop();
document.getElementById("q11").innerHTML = "pop rolls from array: "+foods;
  foods.push("cake");
  document.getElementById("q11.1").innerHTML = "push cake to array: "+foods;
foods.splice(0, 1);
document.getElementById("q11.2").innerHTML = "remove 1st element: "+foods;
