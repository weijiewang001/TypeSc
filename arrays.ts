const activeUsers: string[] = ["colt"]

activeUsers.push("steven")

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;


// const bools: string[] = [];
const bools: Array<string> = []
bools.push("111")

type Points = {
  x: number,
  y: number
}

const coords: Points[] = []
coords.push({ x: 23, y: 8 })
coords.push({ x: 23, y: "8" })


const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"]]

const demo: number[][][] = [[[1], [2], [3]]]
