export default function combinations<T>(values: Iterable<T>): Iterable<T[]> {
  return {
    *[Symbol.iterator]() {
      const valuesArray: T[] = Array.isArray(values) ? values : [...values];
      yield [];
      for (const [index, value] of valuesArray.entries()) {
        for (const combination of combinations(valuesArray.slice(index + 1))) {
          yield [value, ...combination];
        }
      }
    }
  };
}
