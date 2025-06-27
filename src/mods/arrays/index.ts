import { Nullable } from "libs/nullable/index.js"

/**
 * Get the last index
 * @param array 
 * @returns 
 */
export function getLastIndex(array: readonly unknown[]): number {
  return array.length - 1
}

/**
 * Get a random index using Math's PRNG
 * @param array 
 * @returns 
 */
export function getRandomIndex(array: readonly unknown[]): number {
  return Math.floor(Math.random() * array.length)
}

/**
 * Get a random value using WebCrypto's CSPRNG
 * @param array 
 * @returns 
 */
export function getCryptoRandomIndex(array: readonly unknown[]): number {
  const values = new Uint32Array(1)
  crypto.getRandomValues(values)
  return values[0] % array.length
}

export function getOrNull<T>(array: readonly T[], index: number): Nullable<T> {
  return array.at(index)
}

export function getOrThrow<T>(array: readonly T[], index: number): T {
  const value = array.at(index)

  if (value === undefined)
    throw new Error()

  return value
}

export function getFirstOrNull<T>(array: readonly T[]): Nullable<T> {
  return getOrNull(array, 0)
}

export function getFirstOrThrow<T>(array: readonly T[]): T {
  return getOrThrow(array, 0)
}

/**
 * Get the last value
 * @param array 
 * @returns 
 */
export function getLastOrNull<T>(array: readonly T[]): Nullable<T> {
  return getOrNull(array, getLastIndex(array))
}

export function getLastOrThrow<T>(array: readonly T[]): T {
  return getOrThrow(array, getLastIndex(array))
}

/**
 * Get a random value using Math's PRNG
 * @param array 
 * @returns 
 */
export function getRandomOrNull<T>(array: readonly T[]): Nullable<T> {
  return getOrNull(array, getRandomIndex(array))
}

export function getRandomOrThrow<T>(array: readonly T[]): T {
  return getOrThrow(array, getRandomIndex(array))
}

/**
 * Get a random value using WebCrypto's CSPRNG
 * @param array 
 * @returns 
 */
export function getCryptoRandomOrNull<T>(array: readonly T[]): Nullable<T> {
  return getOrNull(array, getCryptoRandomIndex(array))
}

export function getCryptoRandomOrThrow<T>(array: readonly T[]): T {
  return getOrThrow(array, getCryptoRandomIndex(array))
}

/**
 * Get a random value using Math's PRNG and delete it from the array
 * @param array 
 * @returns 
 */
export function takeRandomOrNull<T>(array: T[]): Nullable<T> {
  const index = getRandomIndex(array)
  const element = getOrNull(array, index)
  array.splice(index, 1)
  return element
}

/**
 * Get a random value using WebCrypto's CSPRNG and delete it from the array
 * @param array 
 * @returns 
 */
export function takeCryptoRandomOrNull<T>(array: T[]): Nullable<T> {
  const index = getCryptoRandomIndex(array)
  const element = getOrNull(array, index)
  array.splice(index, 1)
  return element
}