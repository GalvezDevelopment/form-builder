export function clone(toClone: any): string {
  return JSON.parse(JSON.stringify(toClone));
}
