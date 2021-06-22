/**
 * 기대하는 타입이 어던 타입인지 특정 타입으로 제한하기 어려울때 다형성 - 제네릭 타입을 활용한다.
 *  type Filter = {
 *   (array: number[], f: (item: number) => boolean): number[];
 *   (array: string[], f: (item: string) => boolean): string[];
 *  };
 *  ↓
 *  type Filter = { <T>(array: T[], f: (item: T) => boolean): T[] };
 */

type Filter = <T>(array: T[], f: (item: T) => boolean) => T[];

type MyEvent<T> = { target: T; type: string };

type ButtonEvent = MyEvent<HTMLButtonElement>;

let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click',
};

type TimedEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};

function triggerEvent<T>(event: MyEvent<T>): void {}

triggerEvent({
  target: document.querySelector('#myButton'), // Element | null 따라서 T는 Element | null
  type: 'mouseover',
});

type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
  target: Target;
  type: Type;
};
