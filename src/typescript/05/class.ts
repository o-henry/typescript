// piece have color and position
// 색，랭크, 파일의 종류가 많지 않으므로 가질 수 있는 모든 값을 타입 리터럴로 직접 열거할 수 있다.
// 타입 안전성 확보
type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

abstract class Piece {
  //____ : 추상화를 통해 Piece 클래스를 상속받은 클래스를 통해서만 인스턴스화할 수 있도록 허용한다.
  protected position: Position;
  //        ________ : protected도 private 처럼 프로퍼티를 this에 할당하지만, private과 달리
  // Piece의 인스턴스와 서브클래스 인스턴스 모두에 접근을 허용한다.
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
  // ____ 추상 클래스를 구현할때는 추상 메서드도 반드시 구현해야 한다.
}

class Position {
  constructor(private file: File, private rank: Rank) {
    // private : 자동으로 매개변수를 this에 할당한다.
  }

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

// 모든 말은 색과 현재 위치 정보를 갖는다.
class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      // ...
    ];
  }
}

export {};

/**
 * public = 어디에서나 접근 가능, 기본적으로 주어지는 접근 수준이다.
 * protected = 이 클래스와 서브클래스의 인스턴스에서만 접근 가능.
 * private = 이 클래스의 인스턴스에서만 접근 가능.
 * 접근 한정자를 이용해 내부 구현 정보를 너무 많이 공개하지 않고 잘 정의된 API만 노출하도록 클래스를 설계할 수 있다.
 */

// let test = new Piece('White', 'E', 1); //Cannot create an instance of an abstract class.ts(2511)
