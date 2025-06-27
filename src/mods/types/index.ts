export type ArrayLike<T, N extends number = number> =
  | globalThis.ArrayLike<T> & { readonly length: N }

export type Array<T, N extends number = number> =
  | globalThis.Array<T> & { readonly length: N }