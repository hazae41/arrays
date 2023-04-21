import { assert, test } from "@hazae41/phobos"
import { webcrypto } from "crypto"
import { Arrays } from "./index.js"

globalThis.crypto = webcrypto as any

test("cryptoRandom", async ({ test }) => {
  const array = [0, 1, 2, 3, 4, 5]
  const result = Arrays.cryptoRandom(array)
  assert(array.includes(result))
})