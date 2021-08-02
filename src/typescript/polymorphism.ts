let filter: Filter = function filter(array, f) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }

  return result;
};

filter([1, 2, 3, 4], (_) => _ < 3);

// type Filter = { (array: unknown, f: unknown) => unknown }

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

export {};
