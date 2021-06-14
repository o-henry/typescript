/* 
  매개변수 유형을 세분화 하고 Boolean 값을 반환 하는 함수를 만들때,
  user-defined type guard를 사용하여 세분화 할 수 있 다.
*/

function isString(a: unknown): boolean {
  return typeof a === 'string';
}
isString('a');
isString([7]);

function isDefinedString(a: unknown): a is string {
  return typeof a === 'string';
}

function parseInt(input: string | number) {
  let formattedInput: string;

  if (isString(input)) {
    // type refinement doesn't carry over to whatever new scope.
    // need to use user-defined type guard
    formattedInput = input.toUpperCase();
  }

  if (isDefinedString(input)) {
    formattedInput = input.toUpperCase();
  }
}
