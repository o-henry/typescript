// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// Narrowing

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
  // Property 'toUpperCase' does not exist on type 'string | number'.
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
