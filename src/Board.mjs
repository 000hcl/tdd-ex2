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
    this.currentBoard = `.X.\n...\n...\n`
  }

  tick () {
    this.currentBoard = `...\n.X.\n...\n`
  }
}
