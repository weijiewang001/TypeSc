function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`
}

square(3);

const doSomething = (person: string, age: number, isFunny: boolean) => {

}


doSomething("Chicken", 76, false)

function greet1(person: string = "Chicken"): string {
  return `Hi there, ${person}!`;
}

greet1();
greet1("great")


function square1(num: number): number {
  return num * num;
}

square1(2)

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
}

const colors = ["red", "orange"];
colors.map(color => {
  return color.toUpperCase();
})

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoio(): never {
  while (true) {
    console.log("Game Loop Running!");
  }
}