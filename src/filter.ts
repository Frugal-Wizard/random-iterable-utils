export default function filter<I, O extends I>(fn: (value: I) => value is O): (values: Iterable<I>) => Iterable<O>;
export default function filter<I, O extends I>(values: Iterable<I>, fn: (value: I) => value is O): Iterable<O>;
export default function filter<T>(fn: (value: T) => unknown): (values: Iterable<T>) => Iterable<T>;
export default function filter<T>(values: Iterable<T>, fn: (value: T) => unknown): Iterable<T>;

export default function filter<T>(...args: [(value: T) => unknown] | [Iterable<T>, (value: T) => unknown]) {
  if (args.length == 2) {
    return _filter(...args);
  } else {
    return (values: Iterable<T>) => _filter(values, ...args);
  }
}

function _filter<T>(values: Iterable<T>, fn: (value: T) => unknown): Iterable<T> {
  return {
    *[Symbol.iterator]() {
      for (const value of values) {
        if (fn(value)) yield value;
      }
    }
  };
}
