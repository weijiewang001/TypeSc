function printName(person: { first: string, last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Bob", last: "Sam" })



// let coordinate: { x: number, y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number, y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: "Mick", last: "Jagger", age: 473})
// const test = { first: "Mick", last: "Jagger", age: 473}
// printName(test);



// Type Alias
// type Point = {
//   x: number;
//   y: number;
// }

// let coordinate: Point = { x: 34, y: 2 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 3, y: point.y * 2 }
// }


// Nested Objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
}

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title}- ${song.artist}`);
}

calculatePayout({})

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 123455,
  credits: {
    producer: "phil septor",
    writer: "Alex North"
  }
}

calculatePayout(mySong)
printSong(mySong)



// option value
type Point = {
  x: number;
  y: number;
  z?: number;
}

const myPoint: Point = { x: 1, y: 3 };

type User = {
  readonly id: number,
  username: string;
}

const user: User = {
  id: 123120,
  username: "catgurl"
}

console.log(user.id)
user.id




// intersection
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "Yellow",
}


type Cat = {
  numLives: number
}
type Dog = {
  breed: string
}
type CatDog = Cat & Dog & {
  age: number;
}

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9
}