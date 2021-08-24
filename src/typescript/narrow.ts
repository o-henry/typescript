// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// Narrowing
// union type에 따라오는 특징

export {};
// null-checks
function doSomething(x: string | null) {
  // narrowing
  if (x === null) {
    // do nothing
    console.log('Empty !!!');
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

type TdoSomething = { x: string | null };
function doUtility(x: NonNullable<TdoSomething['x']>) {
  console.log('Hello, ' + x.toUpperCase());
}

//  In JavaScript, if you access a property that doesn’t exist,
//  you’ll get the value undefined rather than a runtime error.
//  Because of this, when you read from an optional property,
//  you’ll have to check for undefined before using it.

function printName(obj: { first: string; last?: string }) {
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }

  // modern syntax
  console.log(obj.last?.toUpperCase());
}

// Union Type
function printId(id: number | string) {
  console.log(id.toUpperCase());
  //             ------------ Property 'toUpperCase' does not exist on type 'string | number'.
}

function printId(id: number | string) {
  if (typeof id === 'string') {
    // string
    console.log(id.toUpperCase());
  } else {
    // number
    console.log(id);
  }
}

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}

/* Truthiness narrowing */
// 거짓 판별이 되는 value => 0, NaN, "", 0n, null, undefined

// interface Shape {
//   kind: 'crcle' | 'squre';
//   radius?: number; // number | undefined
//   sideLength?: number; // number | undefined
// }

/* Discriminated unions */

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getLength(shape: Shape) {
  if (shape.kind === 'circle') return Math.PI * shape.radius ** 2;
}
