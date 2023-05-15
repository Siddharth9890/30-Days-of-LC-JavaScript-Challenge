function map(array: number[], fn: (n: number, i: number) => number): number[] {
const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray[i] = fn(array[i], i);
  }
  return resultArray;
};