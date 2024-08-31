document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const resultDisplay = document.getElementById("result");

  const width = 4;

  const squares = [];
  let score = 0;
  // create the playing board

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.innerHTML = 0;
      gridDisplay.appendChild(square);

      // 设置样式
      gridDisplay.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
      gridDisplay.style.gridTemplateRows = `repeat(${width}, 1fr)`;
      square.classList.add("grid-cell");
      squares.push(square);
    }
  }
  createBoard();
  generate();
  generate();

  function generate() {
    const randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
    } else {
      generate();
    }
    addColors();
  }

  function moveRight() {
    for (let i = 0; i < width * width; i++) {
      if (i % 4 === 0) {
        // 拿到每一行
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
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
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  function moveLeft() {
    for (let i = 0; i < width * width; i++) {
      if (i % 4 === 0) {
        // 拿到每一行
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;

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
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  function moveup() {
    for (let i = 0; i < width; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + width * 2].innerHTML;
      let totalFour = squares[i + width * 3].innerHTML;

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
      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + width * 2].innerHTML = newColumn[2];
      squares[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function movedown() {
    for (let i = 0; i < width; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + width * 2].innerHTML;
      let totalFour = squares[i + width * 3].innerHTML;

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
      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + width * 2].innerHTML = newColumn[2];
      squares[i + width * 3].innerHTML = newColumn[3];
    }
  }

  /**
   * keys
   */

  function control(e) {
    console.log("key control");
    if (e.key === "ArrowLeft") {
      keyLeft();
    } else if (e.key === "ArrowRight") {
      keyRight();
    } else if (e.key === "ArrowUp") {
      keyUp();
    } else if (e.key === "ArrowDown") {
      keyDown();
    }
  }

  document.addEventListener("keydown", control);

  function keyLeft() {
    console.log("left");
    moveLeft();
    combineRow();
    // 保证计算后，左移动
    moveLeft();
    generate();
  }

  function keyRight() {
    console.log("right");
    moveRight();
    combineRow();
    // 保证计算后，右移动
    moveRight();
    generate();
  }

  function keyUp() {
    console.log("up");
    moveup();
    combineCol();
    moveup();
    generate();
  }

  function keyDown() {
    console.log("down");
    movedown();
    combineCol();
    movedown();
    generate();
  }

  /**
   */
  function combineRow() {
    for (let i = 0; i < width * width - 1; i++) {
      if (squares[i].innerHTML === squares[i + 1].innerHTML) {
        let cur = parseInt(squares[i].innerHTML);
        let next = parseInt(squares[i + 1].innerHTML);
        let combineTotal = cur + next;
        squares[i].innerHTML = combineTotal;
        squares[i + 1].innerHTML = 0;
        score += combineTotal;
        scoreDisplay.innerHTML = score;
      }
    }
    checkWin();
    checkLose();
  }

  function combineCol() {
    for (let i = 0; i < width * width - width; i++) {
      if (squares[i].innerHTML === squares[i + width].innerHTML) {
        let cur = parseInt(squares[i].innerHTML);
        let next = parseInt(squares[i + width].innerHTML);
        let combineTotal = cur + next;
        squares[i].innerHTML = combineTotal;
        squares[i + width].innerHTML = 0;
        score += combineTotal;
        scoreDisplay.innerHTML = score;
      }
    }
    checkWin();
    checkLose();
  }

  function checkWin() {
    for (let i = 0; i < width * width; i++) {
      if (squares[i].innerHTML === "2048") {
        // resultDisplay.innerHTML = "You Win!";
        document.removeEventListener("keyup", control);
        return true;
      }
    }
  }

  function checkLose() {
    // 检查是否有空格
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML == "0") {
        return false; // 还有空格，游戏没有结束
      }
    }

    // 检查水平方向是否有相邻的相同数字
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width - 1; j++) {
        if (
          squares[i * width + j].innerHTML ===
          squares[i * width + j + 1].innerHTML
        ) {
          return false; // 有相邻的相同数字，游戏没有结束
        }
      }
    }

    // 检查垂直方向是否有相邻的相同数字
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width - 1; j++) {
        if (
          squares[i + j * width].innerHTML ===
          squares[i + (j + 1) * width].innerHTML
        ) {
          return false; // 有相邻的相同数字，游戏没有结束
        }
      }
    }

    // 如果以上条件都不满足，游戏结束
    // resultDisplay.innerHTML = "You Lose!";
    document.removeEventListener("keydown", control);
    return true;
  }
  function addColors() {
    for (let i = 0; i < squares.length; i++) {
      let value = parseInt(squares[i].innerHTML);
      switch (value) {
        case 0:
          squares[i].style.backgroundColor = "#afa192";
          squares[i].style.color = "#afa192";
          break;
        case 2:
          squares[i].style.backgroundColor = "#EEE4DA";
          squares[i].style.color = "#776E65";
          break;
        case 4:
          squares[i].style.backgroundColor = "#EDE0C8";
          squares[i].style.color = "#776E65";
          break;
        case 8:
          squares[i].style.backgroundColor = "#F2B179";
          squares[i].style.color = "#F9F6F2";
          break;
        case 16:
          squares[i].style.backgroundColor = "#F59563";
          squares[i].style.color = "#F9F6F2";
          break;
        case 32:
          squares[i].style.backgroundColor = "#F67C5F";
          squares[i].style.color = "#F9F6F2";
          break;
        case 64:
          squares[i].style.backgroundColor = "#F65E3B";
          squares[i].style.color = "#F9F6F2";
          break;
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
          squares[i].style.backgroundColor = "#EDCF72";
          squares[i].style.color = "#F9F6F2";
          break;
        default:
          squares[i].style.backgroundColor = "#CDC1B4";
          squares[i].style.color = "#776E65";
      }
    }
  }
});
