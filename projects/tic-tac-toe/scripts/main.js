const x = document.getElementsByClassName("square");
let team = 0;
let b = document.getElementById("board");
let btn = document.createElement("BUTTON");
btn.innerHTML = "Play Again";


// creates board
let board = [];
for(let i = 0; i < 3; ++i){
	let subarray = [];
	for(let j = 0; j < 3; ++j){
		subarray.push(-1);
	}
	board.push(subarray);
}

// logs state of board in console
let logBoard = function(){
	console.log("Board:");
	for(let i = 0; i < 3; ++i){
		for(let j = 0; j < 3; ++j){
			console.log(board[i][j] + ' ');
		}
		console.log('\n');
	}
}
logBoard();

// changes state of team
let changeTeam = function(currTeam){
	if(currTeam == 0){
		team = 1;
	} else{
		team = 0;
	}
}

// player move
let move = function(row, col){
	console.log("row: " + row + " col: " + col);
	// checks if space is available
	if(board[row][col] == -1){
		board[row][col] = team;
		return true;
	} else{
		console.log("You can't move there");
		return false;
	}
}

// set certain square on board to X or O depending on whether the player is X or O
let setSquare = function(team, i){
	if(team == 0){
		x[i].innerHTML = 'O';
	} else{
		x[i].innerHTML = 'X'
	}
}

// click on gameboard
let click = function(team, i){
	if(i < 3){
		if(move(0, i)){
			setSquare(team, i);
			changeTeam(team);
		}
		logBoard();
	} else if(i < 6){
		if(move(1, i - 3)){
			setSquare(team, i);
			changeTeam(team);
		}
		logBoard();
	} else {
		if(move(2, i - 6)){
			setSquare(team, i);
			changeTeam(team);
		}
		logBoard();
	}
}

// checks board if full or there is a winner
let checkBoard = function(){
	// checks if row is filled
	for(let row = 0; row < 3; ++row){
		let winX = true;
		let winO = true;
		for(let i = 0; i < 3; ++i){
			if(board[row][i] == 0){
				winX = false;
			} else if(board[row][i] == 1){
				winO = false;
			} else{
				winX = false;
				winO = false;
			}
		}
		if(winX){
			b.innerHTML = "Player X wins!";
			b.appendChild(btn);
			return 1;
		} else if(winO){
			b.innerHTML = "Player O wins!";
			b.appendChild(btn);
			return 0;
		}
	}
	// checks if column is filled
	for(let col = 0; col < 3; ++col){
		let winX = true;
		let winO = true;
		for(let i = 0; i < 3; ++i){
			if(board[i][col] == 0){
				winX = false;
			} else if(board[i][col] == 1){
				winO = false;
			} else{
				winX = false;
				winO = false;
			}
		}
		if(winX){
			b.innerHTML = "Player X wins!";
			b.appendChild(btn);
			return 1;
		} else if(winO){
			b.innerHTML = "Player O wins!";
			b.appendChild(btn);
			return 0;
		}
	}
	
	// checks if diagnol is filled
	let count = 0;
	let winX = true;
	let winO = true;
	while(count < 3){
		if(board[count][count] == 0){
			winX = false;
		} else if(board[count][count] == 1){
			winO = false;
		} else{
			winX = false;
			winO = false;
		}
		count++;
	}
	if(winX){
		b.innerHTML = "Player X wins!";
		b.appendChild(btn);
		return 1;
	} else if(winO){
		b.innerHTML = "Player O wins!";
		b.appendChild(btn);
		return 0;
	}

	count = 0;
	winX = true;
	winO = true;
	while(count < 3){
		if(board[count][2 - count] == 0){
			winX = false;
		} else if(board[count][2 - count] == 1){
			winO = false;
		} else{
			winX = false;
			winO = false;
		}
		count++;
	}
	if(winX){
		b.innerHTML = "Player X wins!";
		b.appendChild(btn);
		return 1;
	} else if(winO){
		b.innerHTML = "Player O wins!";
		b.appendChild(btn);
		return 0;
	}
	
	// checks if board is filled
	let filled = true;
	for(let i = 0; i < 3; ++i){
		for(let j = 0; j < 3; ++j){
			if(board[i][j] == -1){
				filled = false;
				break;
			}
		}
		if(!filled){
			break;
		}
	}
	if(filled){
		b.innerHTML = "It's a tie!";
		b.appendChild(btn);
		return 2;
	}
	
	// if players can still move and no one has won yet
	return -1;
}

// reset board
let reset = function(){
	for(let i = 0; i < 3; ++i){
		for(let j = 0; j < 3; ++j){
			board[i][j] = -1;
		}
	}
	
	b.innerHTML = "<table><tr><td class=\"square\"></td><td class=\"square\"></td><td class=\"square\"></td></tr><tr><td class=\"square\"></td><td class=\"square\"></td><td class=\"square\"></td></tr><tr><td class=\"square\"></td><td class=\"square\"></td><td class=\"square\"></td></tr></table>"
	boardOnClick();
}

// button play again onclick
btn.onclick = function(){
	reset();
}

// gameboard square onclick 
let boardOnClick = function(){	
	for(let i = 0; i < 9; ++i){
		x[i].onclick = function(){
			click(team, i);
			
			if(checkBoard() == 2){
				console.log("TIE");
			} else if(checkBoard() == 1){
				console.log("Player X wins!");
			} else if(checkBoard() == 0){
				console.log("Player O wins!");
			}
			
		}
	}
}
boardOnClick();


