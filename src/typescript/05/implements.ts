/**
 * implements라는 키워드를 이용해 특정 인터페이스를 만족시킴을 표현할 수 있다.
 * 다른 명시적인 타입 어노테이션 처럼 implments로 타입수준의 제한을 추가하면 구현의 문제가 있을때 어디가 잘못되었는지 쉽게 파악할 수 있다.
 */
interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat implements Animal, Feline {
  name = 'Whiskers';
  eat = (food: string) => console.info('Ate some', food, '. Mmm!');
  sleep = (hours: number) => console.info('Slept for', hours, 'hours');
  meow = () => console.info('Meow');
}
