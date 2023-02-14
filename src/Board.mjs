export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBoard = `...\n...\n...\n`
  }

  toString() {
    return(
      this.currentBoard
    );
  }

  drop () {
    var subStringA = this.currentBoard.substring(0,1)
    var subStringB = this.currentBoard.substring(2)
    this.currentBoard = subStringA + 'X' + subStringB
  }

  tick () {
    var subStringA = this.currentBoard.substring(3,5)
    var subStringB = this.currentBoard.substring(6)
    this.currentBoard = '...' + subStringA + 'X' + subStringB
  }
}
