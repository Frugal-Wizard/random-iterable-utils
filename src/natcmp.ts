export default function natcmp(a: number, b: number): number;
export default function natcmp(a: bigint, b: bigint): number;
export default function natcmp(a: string, b: string): number;

export default function natcmp(a: number | bigint | string, b: number | bigint | string): number {
  return a > b ? 1 : a < b ? -1 : 0;
}
