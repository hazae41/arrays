import { benchSync } from "@hazae41/deimos"

const samples = 1_000_000

const array = new Array(100)

for (let i = 0; i < array.length; i++)
  array[i] = Math.random()

const resultFloor = benchSync("Math.floor", () => {
  const x = array[Math.floor(Math.random() * array.length)]
}, { samples })

const resultUnsign = benchSync(">>>0", () => {
  const x = array[(Math.random() * array.length) >>> 0]
}, { samples })

resultFloor.tableAndSummary(resultUnsign)

