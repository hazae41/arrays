import { assert, test } from "@hazae41/phobos"
import { getCryptoRandomOrNull } from "./index.js"

test("cryptoRandom", async ({ test }) => {
  const array = new Uint8Array([0, 1, 2, 3, 4, 5])
  const result = getCryptoRandomOrNull(array)!
  assert(array.includes(result))
})