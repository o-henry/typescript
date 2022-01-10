function ask() {
  return prompt('When is your birthday?'); // 사용자 입력을 받는다.
}

function parse(birthday: string): Date {
  // birthday 는 사용자 입력을 통하므로 검증이 필요하다.
  return new Date(birthday);
}

let date = parse(ask()); // narrowing
console.info('Date is', date.toISOString());

export {};
