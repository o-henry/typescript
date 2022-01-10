//  타입관계

// - any > 객체 > 배열 > 튜플 > ... > never
// - number는 number | string의 유니온에 포함되므로 number | string의 서브타입이다.

// 서버로부터 받은 기존 사용자
type ExistingUser = {
  id: number;
  name: string;
};

// 아직 서버에 저장하지 않은 새 사용자
type NewUser = {
  name: string;
};

// 사용자를 삭제하는 코드
function deleteUser(user: { id?: number; name: string }) {
  delete user.id;
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User',
};

deleteUser(existingUser);

type LegacyUser = {
  id?: number | string;
  name: string;
};

let legacyUser: LegacyUser = {
  id: '79331',
  name: 'Xin Yang',
};

deleteUser(legacyUser);
