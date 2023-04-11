//your JS code here. If required.
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitBtn = document.getElementById('submit');
const board = document.getElementById('board');
const cells = document.getElementsByClassName('cell');
const messageDiv = document.querySelector('.message');

let currentPlayer = '';
let player1Name = '';
let player2Name = '';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

submitBtn.addEventListener('click', startGame);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', makeMove);
}

function startGame() {
  player1Name = player1Input.value;
  player2Name = player2Input.value;
  currentPlayer = player1Name;
  board.style.display = 'grid';
  submitBtn.disabled = true;
  player1Input.disabled = true;
  player2Input.disabled = true;
  messageDiv.textContent = `${player1Name}, you're up!`;
}

function makeMove() {
  if (this.textContent === '' && !gameEnded) {
    const cellId = Number(this.id) - 1;
    gameBoard[cellId] = currentPlayer === player1
