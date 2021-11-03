// type Filter = { (array: unknown, f: unknown) => unknown }

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = function filter(array, f) {
  let result = [];
  array.forEach((item) => f(item) && result.push(item));
  return result;
};

filter([1, 2, 3, 4], (_) => _ < 3);

export {};
