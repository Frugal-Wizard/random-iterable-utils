export default function split<T>(size: number): (values: Iterable<T>) => Iterable<T[]>;
export default function split<T>(values: Iterable<T>, size: number): Iterable<T[]>;

export default function split<T>(...args: [number] | [Iterable<T>, number]) {
  if (args.length == 2) {
    return _split(...args);
  } else {
    return (values: Iterable<T>) => _split(values, ...args);
  }
}

function _split<T>(values: Iterable<T>, size: number): Iterable<T[]> {
  return {
    *[Symbol.iterator]() {
      let slice: T[] = [];
      for (const value of values) {
        slice.push(value);
        if (slice.length >= size) {
          yield slice;
          slice = [];
        }
      }
      if (slice.length > 0) {
        yield slice;
      }
    }
  };
}
