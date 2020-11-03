console.log("hello world")


// Helper funtion for table title change
var tableTitle = function(countX, countO) {
  if (countX === 3) {
    console.log("X Wins! Woo-hoo!")
    document.querySelector('h2').innerHTML = "X Wins Woo-hoo!";
  }
  if (countO === 3) {
    document.querySelector('h2').innerHTML = "O Wins Woot!";;
  }
}


// Helper function to check rows
var checkRow = function(row) {
  var rowChildren = document.querySelector(`.${row}`).children;
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < rowChildren.length; i++) {
    if (rowChildren[i].innerHTML === 'X') {
      countX++;
    } else if (rowChildren[i].innerHTML === 'O') {
      countO++;
    }
  }
  tableTitle(countX, countO);
}

// Helper function to check columns
var checkColumn = function(cellClass) {
  var columnChildren = document.querySelectorAll(`.${cellClass}`);
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < columnChildren.length; i++) {
    if (columnChildren[i].innerHTML === 'X') {
      countX++;
    } else if (columnChildren[i].innerHTML === 'O') {
      countO++;
    }
  }
  tableTitle(countX, countO);
}

// Helper function to check diagonals
var checkMinorDiagonal = function() {
  var c1r1 = document.querySelector('.first-row').children[0].innerHTML;
  var c2r2 = document.querySelector('.second-row').children[1].innerHTML;
  var c3r3 = document.querySelector('.third-row').children[2].innerHTML;
  var minorDiagonalArr = [c1r1, c2r2, c3r3];
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < minorDiagonalArr.length; i++) {
    if (minorDiagonalArr[i] === 'X') {
      countX++;
    } else if (minorDiagonalArr[i] === 'O') {
      countO++;
    }
  }
  tableTitle(countX, countO);
}

// Helper function to check diagonals
var checkMajorDiagonal = function() {
  var c1r1 = document.querySelector('.first-row').children[2].innerHTML;
  var c2r2 = document.querySelector('.second-row').children[1].innerHTML;
  var c3r3 = document.querySelector('.third-row').children[0].innerHTML;
  var minorDiagonalArr = [c1r1, c2r2, c3r3];
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < minorDiagonalArr.length; i++) {
    if (minorDiagonalArr[i] === 'X') {
      countX++;
    } else if (minorDiagonalArr[i] === 'O') {
      countO++;
    }
  }
  tableTitle(countX, countO);
}

// Helper function to check diagonals
var checkMajorDiagonal = function() {
  var c1r1 = document.querySelector('.first-row').children[2].innerHTML;
  var c2r2 = document.querySelector('.second-row').children[1].innerHTML;
  var c3r3 = document.querySelector('.third-row').children[0].innerHTML;
  var minorDiagonalArr = [c1r1, c2r2, c3r3];
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < minorDiagonalArr.length; i++) {
    if (minorDiagonalArr[i] === 'X') {
      countX++;
    } else if (minorDiagonalArr[i] === 'O') {
      countO++;
    }
  }
  tableTitle(countX, countO);
}

var checkWinner = function(rowClass, cellClass) {
  // Helper function to check rows
  checkRow(rowClass);
  // Helper function to check columns
  checkColumn(cellClass);
  // Helper function to check diagonals
  checkMinorDiagonal();
  // Helper function to check diagonals
  checkMajorDiagonal();
  // console.log(winner);
}



// Event handler to add X or O to squares
// Event handler to check winner after each click
var start = "X";
var count = 0;
document.addEventListener('click', function(event) {
  console.log('hihi')
  var target = event.target;
  if (target.tagName === "TD") {
    count++
    target.innerHTML = start;
    if (start === "X") {
      target.style.background = "darkseagreen";
      start = "O";
    } else {
      start = "X";
      target.style.background = "coral";
    }
    var rowClassName = target.parentElement.className;
    var cellClassName = target.className;
    checkWinner(rowClassName, cellClassName);
  }
  if (count === 9 && document.querySelector('h2').innerHTML === "Let's Play!") {
    document.querySelector('h2').innerHTML = "Tie!"
  }
});

// Event handler for button new game
document.querySelector("button").addEventListener('click', function(event) {
  var cellArr = document.querySelectorAll("td");
  console.log(cellArr);

});

