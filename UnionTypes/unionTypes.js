// Basic Union Type:
var age = 21;
age = 23;
age = "24";
// Union type with type aliases
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
// Function parameter union type:
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
// const nums: number[] = [1,2,3,4]
// const stuff: any[] = [1,2,3,4, true, "asdas", {}]
// const stuff: (number | string)[] = [1,2,3, "das"]
// const stuff: number[] | string[] = ["asd", "asd", 1]
// Union Type With Arrays
var coords = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });
// Literal Types
var zero = 0;
var mood = "Happy";
mood = "Sad";
var today = "Sunday";
