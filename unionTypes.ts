let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number,
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 12312.23, long: 3535.23 }

function printAge(age: number | string) {
  console.log(`You are ${age} years old`);
}

printAge(23)
printAge("87")

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""))
  }
  return price * tax
}

calculateTax(45, .07)
calculateTax("$45", .07)


// const stuff: any [] = [1,2,3,4, true, "asdas", {}

const stuff: (number | string)[] = [1, 2, 3, "das"]

const coordss: (Point | Loc)[] = []
coordss.push({ lat: 12312.23, long: 3535.23 })
coordss.push({ x: 213, y: 2 })

let zero: 0 = 0


let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

