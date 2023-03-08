export namespace Arrays {

  /**
   * Get the last value
   * @param array 
   * @returns 
   */
  export function last<T>(array: readonly T[]) {
    return array[array.length - 1]
  }

  /**
   * Get a random value using Math's PRNG
   * @param array 
   * @returns 
   */
  export function random<T>(array: readonly T[]) {
    return array[Math.floor(Math.random() * array.length)]
  }

  /**
   * Get a random value using WebCrypto's CSPRNG
   * @param array 
   * @returns 
   */
  export function cryptoRandom<T>(array: readonly T[]) {
    const values = new Uint32Array(1)
    crypto.getRandomValues(values)
    return array[values[0] % array.length]
  }

}