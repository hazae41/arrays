/**
 * Get the last value
 * @param array 
 * @returns 
 */
export function last<T>(array: readonly T[]) {
  return array[lastIndex(array)]
}

/**
 * Get the last index
 * @param array 
 * @returns 
 */
export function lastIndex(array: readonly unknown[]) {
  return array.length - 1
}

/**
 * Get a random value using Math's PRNG
 * @param array 
 * @returns 
 */
export function random<T>(array: readonly T[]) {
  return array[randomIndex(array)]
}

/**
 * Get a random index using Math's PRNG
 * @param array 
 * @returns 
 */
export function randomIndex(array: readonly unknown[]) {
  return Math.floor(Math.random() * array.length)
}

/**
 * Get a random value using WebCrypto's CSPRNG
 * @param array 
 * @returns 
 */
export function cryptoRandom<T>(array: readonly T[]) {
  return array[cryptoRandomIndex(array)]
}

/**
 * Get a random value using WebCrypto's CSPRNG
 * @param array 
 * @returns 
 */
export function cryptoRandomIndex(array: readonly unknown[]) {
  const values = new Uint32Array(1)
  crypto.getRandomValues(values)
  return values[0] % array.length
}

/**
 * Get a random value using Math's PRNG and delete it from the array
 * @param array 
 * @returns 
 */
export function takeRandom<T>(array: T[]) {
  const index = randomIndex(array)
  const element = array[index]
  array.splice(index, 1)
  return element
}

/**
 * Get a random value using WebCrypto's CSPRNG and delete it from the array
 * @param array 
 * @returns 
 */
export function takeCryptoRandom<T>(array: T[]) {
  const index = cryptoRandomIndex(array)
  const element = array[index]
  array.splice(index, 1)
  return element
}