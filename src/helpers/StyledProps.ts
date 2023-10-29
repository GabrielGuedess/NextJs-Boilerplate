export type StyledProps<T> = Required<{
  [K in keyof T as `$${string & K}`]: T[K];
}>;
