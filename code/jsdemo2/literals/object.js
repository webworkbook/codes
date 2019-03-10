//对象字面值是封闭在花括号对({})中的一个对象的零个或多个"属性名-值"对的（元素）列表

var Sales = "Toyota";

function CarTypes(name) {
  return (name === "Honda") ?
    name :
    "Sorry, we don't sell " + name + "." ;
}

// var car = { myCar: "Saturn", getCar: CarTypes("Handa"), special: Sales };
// console.log(car.myCar);   // Saturn
// console.log(car.getCar);  // Honda
// console.log(car.special); // Toyota

var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda