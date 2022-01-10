/**
 * Option
 * 어떤 특정 값을 반환하는 대신 값을 포함하거나 포함하지 않을 수도 있는 컨테이너를 반환한다
 *
 * Option<T>
 * * Some<T> or None
 */

interface Option<T> {}

class Some<T> implements Option<T> {
  constructor(private value: T) {}
}

class None implements Option<never> {}
