export default function range(min: number, max: number, step?: number): Iterable<number>;
export default function range(min: bigint, max: bigint, step?: bigint): Iterable<bigint>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function range(min: any, max: any, step?: any): Iterable<any> {
  return {
    *[Symbol.iterator]() {
      for (
        let value = min;
        value <= max;
        step ? value += step : value++
      ) {
        yield value;
      }
    }
  };
}
