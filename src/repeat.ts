export default function repeat<T>(amount: number, value: T): Iterable<T> {
  return {
    *[Symbol.iterator]() {
      for (let i = 0; i < amount; i++) {
        yield value;
      }
    }
  };
}
