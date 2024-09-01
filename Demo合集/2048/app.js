/**
 * 优化代码
 */

class Game2048 {
  constructor(gridDisplay, scoreDisplay, width = 4) {
    this.gridDisplay = gridDisplay;
    this.scoreDisplay = scoreDisplay;
    this.width = width;
    this.squares = [];
    this.score = 0;
  }

  init() {
    this.createBoard();
    this.generate();
    this.generate();
    document.addEventListener("keydown", this.control.bind(this));
  }

  createBoard() {
    // 设置样式
    this.gridDisplay.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
    this.gridDisplay.style.gridTemplateRows = `repeat(${this.width}, 1fr)`;

    for (let i = 0; i < this.width * this.width; i++) {
      const square = document.createElement("div");
      square.innerHTML = 0;
      square.classList.add("grid-cell");
      this.gridDisplay.appendChild(square);
      this.squares.push(square);
    }
  }

  generate() {
    const emptySquares = this.squares.filter((square) => square.innerHTML == 0);
    if (emptySquares.length > 0) {
      const randomSquare =
        emptySquares[Math.floor(Math.random() * emptySquares.length)];
      randomSquare.innerHTML = Math.random() < 0.9 ? 2 : 4; // 90% 概率生成 2，10% 概率生成 4
      this.addColors();
    }
  }

  /**
   * key
   */

  control(e) {
    switch (e.key) {
      case "ArrowLeft":
        this.keyLeft();
        break;
      case "ArrowRight":
        this.keyRight();
        break;
      case "ArrowUp":
        this.keyUp();
        break;
      case "ArrowDown":
        this.keyDown();
        break;
    }
  }

  keyLeft() {
    this.moveLeft();
    this.combineRow();
    // 保证计算后，左移动
    this.moveLeft();
    this.generate();
  }

  keyRight() {
    console.log("right");
    this.moveRight();
    this.combineRow();
    // 保证计算后，右移动
    this.moveRight();
    this.generate();
  }

  keyUp() {
    console.log("up");
    this.moveup();
    this.combineCol();
    this.moveup();
    this.generate();
  }

  keyDown() {
    console.log("down");
    this.movedown();
    this.combineCol();
    this.movedown();
    this.generate();
  }

  moveRight() {
    for (let i = 0; i < this.width * this.width; i++) {
      if (i % 4 === 0) {
        // 拿到每一行
        let totalOne = this.squares[i].innerHTML;
        let totalTwo = this.squares[i + 1].innerHTML;
        let totalThree = this.squares[i + 2].innerHTML;
        let totalFour = this.squares[i + 3].innerHTML;
        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalFour),
        ];

        /** 右移
         * [0,2,0,0] => [0,0,0,2]
         */

        let filteredRow = row.filter((num) => num);
        let missing = 4 - filteredRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = zeros.concat(filteredRow);

        /** 展示新的 */
        this.squares[i].innerHTML = newRow[0];
        this.squares[i + 1].innerHTML = newRow[1];
        this.squares[i + 2].innerHTML = newRow[2];
        this.squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  moveLeft() {
    for (let i = 0; i < this.width * this.width; i++) {
      if (i % 4 === 0) {
        // 拿到每一行
        let totalOne = this.squares[i].innerHTML;
        let totalTwo = this.squares[i + 1].innerHTML;
        let totalThree = this.squares[i + 2].innerHTML;
        let totalFour = this.squares[i + 3].innerHTML;

        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalFour),
        ];

        let filteredRow = row.filter((num) => num);
        let missing = 4 - filteredRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = filteredRow.concat(zeros);
        /** 展示新的 */
        this.squares[i].innerHTML = newRow[0];
        this.squares[i + 1].innerHTML = newRow[1];
        this.squares[i + 2].innerHTML = newRow[2];
        this.squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  moveup() {
    for (let i = 0; i < this.width; i++) {
      let totalOne = this.squares[i].innerHTML;
      let totalTwo = this.squares[i + this.width].innerHTML;
      let totalThree = this.squares[i + this.width * 2].innerHTML;
      let totalFour = this.squares[i + this.width * 3].innerHTML;

      let column = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];

      let filteredColumn = column.filter((num) => num);
      let missing = 4 - filteredColumn.length;
      let zeros = Array(missing).fill(0);
      let newColumn = filteredColumn.concat(zeros);

      /** 展示新的 */
      this.squares[i].innerHTML = newColumn[0];
      this.squares[i + this.width].innerHTML = newColumn[1];
      this.squares[i + this.width * 2].innerHTML = newColumn[2];
      this.squares[i + this.width * 3].innerHTML = newColumn[3];
    }
  }

  movedown() {
    for (let i = 0; i < this.width; i++) {
      let totalOne = this.squares[i].innerHTML;
      let totalTwo = this.squares[i + this.width].innerHTML;
      let totalThree = this.squares[i + this.width * 2].innerHTML;
      let totalFour = this.squares[i + this.width * 3].innerHTML;

      let column = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];

      let filteredColumn = column.filter((num) => num);
      let missing = 4 - filteredColumn.length;
      let zeros = Array(missing).fill(0);
      let newColumn = zeros.concat(filteredColumn);

      /** 展示新的 */
      this.squares[i].innerHTML = newColumn[0];
      this.squares[i + this.width].innerHTML = newColumn[1];
      this.squares[i + this.width * 2].innerHTML = newColumn[2];
      this.squares[i + this.width * 3].innerHTML = newColumn[3];
    }
  }

  combineRow() {
    for (let i = 0; i < this.width * this.width - 1; i++) {
      if (this.squares[i].innerHTML === this.squares[i + 1].innerHTML) {
        let cur = parseInt(this.squares[i].innerHTML);
        let next = parseInt(this.squares[i + 1].innerHTML);
        let combineTotal = cur + next;
        this.squares[i].innerHTML = combineTotal;
        this.squares[i + 1].innerHTML = 0;
        this.score += combineTotal;
        this.scoreDisplay.innerHTML = this.score;
      }
    }
    this.checkWin();
    this.checkLose();
  }

  combineCol() {
    for (let i = 0; i < this.width * this.width - this.width; i++) {
      if (
        this.squares[i].innerHTML === this.squares[i + this.width].innerHTML
      ) {
        let cur = parseInt(this.squares[i].innerHTML);
        let next = parseInt(this.squares[i + this.width].innerHTML);
        let combineTotal = cur + next;
        this.squares[i].innerHTML = combineTotal;
        this.squares[i + this.width].innerHTML = 0;
        this.score += combineTotal;
        this.scoreDisplay.innerHTML = this.score;
      }
    }
    this.checkWin();
    this.checkLose();
  }

  checkWin() {
    for (let i = 0; i < this.width * this.width; i++) {
      if (this.squares[i].innerHTML === "2048") {
        // resultDisplay.innerHTML = "You Win!";
        alert("You Win!");
        document.removeEventListener("keyup", this.control);
        return true;
      }
    }
  }

  checkLose() {
    // 检查是否有空格
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i].innerHTML == "0") {
        return false; // 还有空格，游戏没有结束
      }
    }

    // 检查水平方向是否有相邻的相同数字
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width - 1; j++) {
        if (
          this.squares[i * this.width + j].innerHTML ===
          this.squares[i * this.width + j + 1].innerHTML
        ) {
          return false; // 有相邻的相同数字，游戏没有结束
        }
      }
    }

    // 检查垂直方向是否有相邻的相同数字
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width - 1; j++) {
        if (
          this.squares[i + j * this.width].innerHTML ===
          this.squares[i + (j + 1) * this.width].innerHTML
        ) {
          return false; // 有相邻的相同数字，游戏没有结束
        }
      }
    }

    // 如果以上条件都不满足，游戏结束
    // resultDisplay.innerHTML = "You Lose!";
    alert("You Lose!");
    document.removeEventListener("keydown", this.control);
    return true;
  }

  addColors() {
    for (let i = 0; i < this.squares.length; i++) {
      let value = parseInt(this.squares[i].innerHTML);
      switch (value) {
        case 0:
          this.squares[i].style.backgroundColor = "#afa192";
          this.squares[i].style.color = "#afa192";
          break;
        case 2:
          this.squares[i].style.backgroundColor = "#EEE4DA";
          this.squares[i].style.color = "#776E65";
          break;
        case 4:
          this.squares[i].style.backgroundColor = "#EDE0C8";
          this.squares[i].style.color = "#776E65";
          break;
        case 8:
          this.squares[i].style.backgroundColor = "#F2B179";
          this.squares[i].style.color = "#F9F6F2";
          break;
        case 16:
          this.squares[i].style.backgroundColor = "#F59563";
          this.squares[i].style.color = "#F9F6F2";
          break;
        case 32:
          this.squares[i].style.backgroundColor = "#F67C5F";
          this.squares[i].style.color = "#F9F6F2";
          break;
        case 64:
          this.squares[i].style.backgroundColor = "#F65E3B";
          this.squares[i].style.color = "#F9F6F2";
          break;
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
          this.squares[i].style.backgroundColor = "#EDCF72";
          this.squares[i].style.color = "#F9F6F2";
          break;
        default:
          this.squares[i].style.backgroundColor = "#CDC1B4";
          this.squares[i].style.color = "#776E65";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  let game = new Game2048(gridDisplay, scoreDisplay);

  game.init();
});
