interface Option<T> {
  flatMap<U>(f: (value: T) => Option<U>): Option<U>;
  getOrElse(value: T): T;
}

class Some<T> implements Option<T> {
  constructor(private value: T) {}
}

class None implements Option<never> {}

export {};
