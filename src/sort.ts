export default function sort<T>(compare: (a: T, b: T) => number): (values: Iterable<T>) => Iterable<T>;
export default function sort<T>(values: Iterable<T>, compare: (a: T, b: T) => number): Iterable<T>;

export default function sort<T>(...args: [(a: T, b: T) => number] | [Iterable<T>, (a: T, b: T) => number]) {
  if (args.length == 2) {
    return _sort(...args);
  } else {
    return (values: Iterable<T>) => _sort(values, ...args);
  }
}

function _sort<T>(values: Iterable<T>, compare: (a: T, b: T) => number): Iterable<T> {
  return {
    [Symbol.iterator]() {
      return [...values].sort(compare)[Symbol.iterator]();
    }
  };
}
