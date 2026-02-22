export const keyBy = <T>(arr: T[], key: keyof T): Record<string, T> => {
  return Object.fromEntries(arr.map(item => [item[key], item]))
}
