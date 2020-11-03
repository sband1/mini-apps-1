console.log("hello world")

console.log(document.getElementsByTagName('h2').innerHTML)



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

  if (countX === 3) {
    console.log("X Wins! Woo-hoo!")
    document.querySelector('h2').innerHTML = "X Wins Woo-hoo!";
  }
  if (countO === 3) {
    document.querySelector('h2').innerHTML = "O Wins Woot!";;
  }

}

// Helper function to check columns
var checkColumn = function(column) {
  var columnChildren = document.querySelectorAll(`.${column}`);
  console.log("columnChildren", columnChildren);
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < columnChildren.length; i++) {
    if (columnChildren[i].innerHTML === 'X') {
      countX++;
      console.log("columnX", countX);
    } else if (columnChildren[i].innerHTML === 'O') {
      countO++;
    }
  }
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

}


// Event handler to add X or O to squares
var start = "X";
document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.tagName === "TD") {
    target.innerHTML = start;
    if (start === "X") {
      target.style.background = "darkseagreen";
      start = "O";
    } else {
      start = "X";
      target.style.background = "coral";
    }
    var parentClassName = target.parentElement.className;
    var cellClassName = target.className;
    // call helper function
    checkRow(parentClassName);
    checkColumn(cellClassName);
    checkMinorDiagonal();
  }
});


// Event Handler to check rows, columns, and diagonals for winner