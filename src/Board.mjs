export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBoard = `...\n...\n...\n`
    this.currentLocation = 0
    this.currentBlock = null
    this.moving = false
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

  drop (block) {
    if (this.moving) {
      throw "already falling"
    }
    this.currentBlock = block
    this.moving = true
    this.currentLocation = 1
    this.replaceSpace(1, block.color)
  }

  tick () {
    if (this.currentLocation + 4 <= 11 && this.currentBoard.charAt(this.currentLocation+4) === '.'){
      this.replaceSpace(this.currentLocation, '.')
      this.currentLocation += 4
      this.replaceSpace(this.currentLocation, this.currentBlock.color)
    } else {
      this.moving = false
    }

  }

  hasFalling () {
    return this.moving;
  }
}
