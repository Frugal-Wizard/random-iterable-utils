export default function map<I, O>(fn: (value: I) => O): (values: Iterable<I>) => Iterable<O>;
export default function map<I, O>(values: Iterable<I>, fn: (value: I) => O): Iterable<O>;

export default function map<I, O>(...args: [(value: I) => O] | [Iterable<I>, (value: I) => O]) {
  if (args.length == 2) {
    return _map(...args);
  } else {
    return (values: Iterable<I>) => _map(values, ...args);
  }
}

function _map<I, O>(values: Iterable<I>, fn: (value: I) => O): Iterable<O> {
  return {
    *[Symbol.iterator]() {
      for (const value of values) {
        yield fn(value);
      }
    }
  };
}
