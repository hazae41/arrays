import { benchSync } from "@hazae41/deimos"
import { webcrypto } from "crypto"
import { Arrays } from "mods/arrays/arrays.js"

globalThis.crypto = webcrypto as any

const samples = 1_000

const array = new Array(100)

for (let i = 0; i < array.length; i++)
  array[i] = Math.random()

const resultFloor = benchSync("random", () => {
  const x = Arrays.random(array)
}, { samples })

const resultUnsign = benchSync("cryptoRandom", () => {
  const x = Arrays.cryptoRandom(array)
}, { samples })

resultFloor.tableAndSummary(resultUnsign)

