class Game {}

// piece have color and position
// 색，랭크, 파일의 종류가 많지 않으므로 가질 수 있는 모든 값을 타입 리터럴로 직접 열거할 수 있다.
// 타입 안전성 확보
type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Piece {
  protected position: Position;
  //        ________ : protected도 private 처럼 프로퍼티를 this에 할당하지만, private과 달리
  // Piece의 인스턴스와 서브클래스 인스턴스 모두에 접근을 허용한다.
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
}

class Position {
  constructor(private file: File, private rank: Rank) {
    //       _______ : 자동으로 매개변수를 this에 할당한다.
  }
}

// 모든 말은 색과 현재 위치 정보를 갖는다.
class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

export {};

/**
 * protected = 이 클래스와 서브클래스의 인스턴스에서만 접근 가능.
 * private = 이 클래스의 인스턴스에서만 접근 가능.
 * 접근 한정자를 이용해 내부 구현 정보를 너무 많이 공개하지 않고 잘 정의된 API만 노출하도록 클래스를 설계할 수 있다.
 */
