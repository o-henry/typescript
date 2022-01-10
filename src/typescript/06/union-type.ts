type UserTextEvent = {
  // tagged union
  type: 'TextEvent';
  value: string;
  target: HTMLInputElement;
};
type UserMouseEvent = {
  type: 'MouseEvent';
  value: [number, number];
  target: HTMLElement;
};

type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  // handle이 UserEvent 타입의 매개변수를 받는 다는 것은 UsertTextEvnet, UserMouseEvent, UserTextEvent | UserMouseEvent 를 전달할 수 있다는 말이다.
  if (event.type === 'TextEvent') {
    event.value; // string
    event.target; // HTMLInputElement
    // ...
    return;
  }
  event.value; // [number, number]
  event.target; // HTMLElement
