export function clone(toClone: unknown): string {
  return JSON.parse(JSON.stringify(toClone));
}
