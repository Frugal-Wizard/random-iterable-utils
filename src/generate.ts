export default function generate<T>(fn: () => Generator<T>): Iterable<T> {
  return { [Symbol.iterator]: fn };
}
