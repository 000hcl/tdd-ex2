export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBoard = `...\n...\n...\n`
    this.currentBlock = -3
  }

  toString() {
    return(
      this.currentBoard
    );
  }

  drop () {
    if (this.currentBoard !== `...\n...\n...\n`) {
      throw "already falling"
    }
    this.currentBlock += 4
    var subStringA = this.currentBoard.substring(0,1)
    var subStringB = this.currentBoard.substring(2)
    this.currentBoard = subStringA + 'X' + subStringB
  }

  tick () {
    /*empty until current block location*/
    var subStringA = this.currentBoard.substring(0,this.currentBlock)
    var subStringB = this.currentBoard.substring(this.currentBlock+1)
    this.currentBoard = subStringA + '.' + subStringB
    /*add new falling block*/
    this.currentBlock += 4
    var subStringA = this.currentBoard.substring(0,this.currentBlock)
    var subStringB = this.currentBoard.substring(this.currentBlock+1)
    this.currentBoard = subStringA + 'X' + subStringB
  }

  hasFalling () {
    return true;
  }
}
