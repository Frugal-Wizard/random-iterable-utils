interface Chain<T> extends Iterable<T> {
  then<T2>(fn: (values: Iterable<T>) => Iterable<T2>): Chain<T2>;
}

export default function chain<T>(values: Iterable<T>): Chain<T> {
  return {
    [Symbol.iterator]() {
      return values[Symbol.iterator]();
    },

    then(fn) {
      return chain(fn({
        [Symbol.iterator]() {
          return values[Symbol.iterator]();
        },
      }));
    },
  };
}
