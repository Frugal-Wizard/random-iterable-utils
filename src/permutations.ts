export default function permutations<T>(values: Iterable<T>): Iterable<T[]> {
  return {
    *[Symbol.iterator]() {
      const valuesArray: T[] = Array.isArray(values) ? values : [...values];
      yield [];
      for (const value of valuesArray) {
        for (const permutation of permutations(valuesArray.filter(v => v !== value))) {
          yield [value, ...permutation];
        }
      }
    }
  };
}
