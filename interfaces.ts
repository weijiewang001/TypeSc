// type Pointer = {
//   x: number,
//   y: number,
// }



// const pt: Pointer = { x: 213, y: 234 }

interface Pointer {
  x: number;
  y: number;
}

const pt: Pointer = { x: 123, y: 1234 }


interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  frist: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21397,
  sayHi: () => {
    return "Hello!";
  }
};

thomas.first = "faldf"
thomas.id = 234

interface Productss {
  name: string,
  price: number,
  applyDiscount(discount: number): number;
}

const shoes: Productss = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  }
}

console.log(shoes.applyDiscount(.4))



interface Dogs {
  name: string;
  age: number;
}

interface Dogs {
  breed: string;
  bark(): string;
}

const elton: Dogs = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!"
  }
}


interface ServiceDog extends Dogs {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!"
  },
  job: "guide dog"
}


interface Human {
  name: string
}

interface Employee {
  readonly id: number,
  email: string,
}

interface Engineer extends Human, Employee {
  level: string,
  languages: string[]
}

const pierre: Engineer = {
  name: "Pierre",
  id: 32423,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"]
}

type Color = "red" | "blue"

interface Chicken {
  breed: string
}

interface Chicken {
  numEggs: number
}