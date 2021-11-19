/**
 * readonly
 * readonly prevents assignments to the field outside of the constructor
 */
class Greeter {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) this.name = otherName;
  }
}

const g2 = new Greeter();
// g2.name = 'also not ok';
// Cannot assign to 'name' because it is a read-only property.ts(2540)

/**
 * Super Calls
 * 기본 클래스가 존재하는 경우 super()를 호출해야 합니다.
 * 자주 잊어먹지만, Typescript가 필요할때 알려주므로 괜찮습니다.
 */

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super();

    console.log(this.k);
  }
}

/**
 * Methods
 */

class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

/**
 * Class Heritage
 * implements
 * implements를 통해 특정 interface를 충족하는지 체크할 수 있습니다.
 */

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}

class Ball implements Pingable {
  pong() {
    console.log('pong!');
  }
}

/**
 * Cautions
 * implements 구문은 클래스가 인터페이스 타입으로 처리하는지만을 체크하는데 불과하다는점을 이해하는것이 중요합니다.
 * 클래스의 타입이나 메서드는 전혀 변경되지 않습니다.
 */

/**
 * extends
 */

class Animal {
  move() {
    console.group('Moving along!');
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const d = new Dog();
d.move();
d.woof(3);
export {};
