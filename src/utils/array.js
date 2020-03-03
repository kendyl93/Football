export const any = array => array.length > 0;

export const equal = (a, b) =>
  a.length === b.length && a.every((element, index) => element === b[index]);
