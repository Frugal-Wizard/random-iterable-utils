export default function mapgen<I, O>(fn: (value: I) => Generator<O>): (values: Iterable<I>) => Iterable<O>;
export default function mapgen<I, O>(values: Iterable<I>, fn: (value: I) => Generator<O>): Iterable<O>;

export default function mapgen<I, O>(...args: [(value: I) => Generator<O>] | [Iterable<I>, (value: I) => Generator<O>]) {
  if (args.length == 2) {
    return _mapgen(...args);
  } else {
    return (values: Iterable<I>) => _mapgen(values, ...args);
  }
}

function _mapgen<I, O>(values: Iterable<I>, fn: (value: I) => Generator<O>): Iterable<O> {
  return {
    *[Symbol.iterator]() {
      for (const value of values) {
        for (const value2 of fn(value)) {
          yield value2;
        }
      }
    },
  };
}
