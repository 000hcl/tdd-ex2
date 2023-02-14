export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBoard = `...\n...\n...\n`
    this.currentBlock = -3
    this.moving = true
  }

  toString() {
    return(
      this.currentBoard
    );
  }

  replaceSpace (space, symbol) {
    var subStringA = this.currentBoard.substring(0,space)
    var subStringB = this.currentBoard.substring(space+1)
    this.currentBoard = subStringA + symbol + subStringB
  }

  drop () {
    if (this.currentBoard !== `...\n...\n...\n`) {
      throw "already falling"
    }
    this.currentBlock += 4
    this.replaceSpace(1, 'X')
  }

  tick () {
    if (this.currentBlock + 4 <= 11){
      this.replaceSpace(this.currentBlock, '.')
      this.currentBlock += 4
      this.replaceSpace(this.currentBlock, 'X')
    } else {
      this.moving = false
    }

  }

  hasFalling () {
    return this.moving;
  }
}
