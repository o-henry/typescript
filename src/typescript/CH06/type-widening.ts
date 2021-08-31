let a = 'x'; // string
let b = 3; // number
var c = true; // boolean
const d = { x: 3 }; // { x: number }

enum E {
  X,
  Y,
  Z,
}

let e = E.X; // E

const f = 'x'; // 'x'
const g = 3; // 3
const h = true; // true

// 자동확장
let i = f; // string

// 변수 선언때 명시적으로 타입 어노테이션을 추가하면 자동확장이 이러나지 않는다.
const j: 'x' = 'x'; // 'x'
let k = j; // 'x'

// null 이나 undefined로 초기화된 변수는 any 타입으로 넓혀진다.
let l = null; // any
l = 3; // any

let m = [1, { x: 2 }] as const; // readonly [1, { readonly x: 2 }]
