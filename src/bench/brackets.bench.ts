import { benchSync } from "@hazae41/deimos"

const samples = 1_000_000

const array = new Array(100)

for (let i = 0; i < array.length; i++)
  array[i] = Math.random()

const resultBrackets = benchSync("array[i]", () => {
  const x = array[Math.floor(Math.random() * array.length)]
}, { samples })

const resultAt = benchSync("array.at(i)", () => {
  const x = array.at(Math.floor(Math.random() * array.length))
}, { samples })

resultBrackets.tableAndSummary(resultAt)

