document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0;
  let food = 0;
  let snake = [2, 1, 0]; // 2 is the head and 0 is the tail
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  const startGame = () => {
    snake.forEach((i) => squares[i].classList.remove("snake"));
    squares[food].classList.remove("food");
    clearInterval(interval);
    score = 0;

    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    snake = [2, 1, 0];
    currentIndex = 0;
    snake.forEach((i) => squares[i].classList.add("snake"));
    interval = setInterval(moveOutcomes, intervalTime);
    randomFood();
  };

  // * Moves of Snake
  const moveOutcomes = () => {
    // ! If snakes hit border or self
    if (
      (snake[0] + width >= width * width && direction === width) || // Bottom
      (snake[0] % width === width - 1 && direction === 1) || // Right
      (snake[0] % width === 0 && direction === -1) || // Left
      (snake[0] - width < 0 && direction === -width) || // Top
      squares[snake[0] + direction].classList.contains("snake") // Itself
    ) {
      return clearInterval(interval);
    }

    const tail = snake.pop();
    squares[tail].classList.remove("snake");
    snake.unshift(snake[0] + direction);

    // * Snake eats food
    if (squares[snake[0]].classList.contains("food")) {
      squares[snake[0]].classList.remove("food");
      squares[tail].classList.add("snake");
      snake.push(tail);
      randomFood();
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed;
      interval = setInterval(moveOutcomes, intervalTime);
    }
    squares[snake[0]].classList.add("snake");
  };

  const randomFood = () => {
    do {
      food = Math.floor(Math.random() * squares.length);
    } while (squares[food].classList.contains("snake"));

    squares[food].classList.add("food");
  };

  const control = (e) => {
    squares[currentIndex].classList.remove("snake");

    if (e.keyCode === 37) {
      direction = -1; // * <- Left
    } else if (e.keyCode === 38) {
      direction = -width; // * Up
    } else if (e.keyCode === 39) {
      direction = 1; // * -> Right
    } else if (e.keyCode === 40) {
      direction = +width; // * Down
    }
  };

  document.addEventListener("keyup", control);
  startBtn.addEventListener("click", startGame);
});
