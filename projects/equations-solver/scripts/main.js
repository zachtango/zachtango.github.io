let system = [];
let leftCol;
let pivots = [];
let basic = [];
let soln = [];



let printSystem = function(){
	console.log("System:")
	for(let i = 0; i < 3; ++i){
		console.log(system[i]);
	}
}

let printPivots = function(){
	console.log("Pivots:");
	for(let i = 0; i < 3; ++i){
		console.log(pivots[i]);
	}
}

let getSystem = function(){
	let x = document.getElementsByClassName("eqn");
	let i = 0;

	for(let row = 0; row < 3; ++row){
		let eqn = [];
		for(let col = 0; col < 4; ++col){
			eqn.push(parseInt(x[i].value));
			i++;
		}
		system.push(eqn);
	}
	
	for(let i = 0; i < 3; ++i){
		pivots.push(false);
	}
	
	printSystem();
}

let rowReduction = function(row){
	console.log("RR: " + row);
	const col = row;
	const pivot = choosePivot(row);
	if(Number.isNaN(pivot)){
		return;
	}
	
	if(row + 1 > 2){
		console.log("RR complete");
		return;
	}
	
	for(let i = row + 1; i < 3; ++i){
		if(system[i][row] == 0){
			continue;
		}
		let magicNum = (system[i][col] / pivot) * -1;
		console.log("Magic Num: " + magicNum);
		
		const temp = system[row].map(num => 1.0 * magicNum * num);
		
		system[i] = addEqns(system[i], temp);
		printSystem();
	}
}

let choosePivot = function(row){
	if(orderRows(row) == -1){
		return NaN;
	}
	
	let i = 0;
	
	while(system[row][i] == 0 && i < system[row].length){
		i++;
	}
	
	if(i == system[row].length){
		console.log("Invalid can't be zero");
		return NaN;
	} else{
		console.log("Pivot: " + system[row][i]);
		pivots[i] = true;
		printPivots();
		return system[row][i];
	}
}

let orderRows = function(row){
	let i = row;

	while(system[i][leftCol] == 0 && i < 3){
		i++;
	}
	leftCol++;

	if(i == 3){
		console.log("all zero col");
		return -1;
	}
	if(i != row){
		const temp = system[i];
		system[i] = system[row];
		system[row] = temp;
		console.log("Swapped row " + row + " with row " + i);
		printSystem();
		return 0;
	}
}

let addEqns = function(eq1, eq2){
	const temp = [];
	for(let i = 0; i < eq1.length; ++i){
		temp.push(eq1[i] + eq2[i]);
	}
	console.log(eq1 + " + " + eq2 + " = " + temp);
	return temp;
}

let determineVar = function(){
	for(let i = 0; i < 3; ++i){
		if(pivots[i]){
			basic.push(true);
		} else{
			basic.push(false);
		}
	}
}

let solve = function(){
	if(basic[2]){
		soln[2] = 1.0 * system[2][3] / system[2][2];
	}
	if(basic[1]){
		soln[1] = (system[1][3] - 1.0 * system[1][2] * soln[2]) / system[1][1];
	}
	if(basic[0]){
		soln[0] = (system[0][3] - 1.0 * system[0][2] * soln[2] - 1.0 * system[0][1] * soln[1]) / system[0][0];
	}
}

let printSoln = function(){
	let x = document.getElementById("soln");
	x.innerHTML = "";
	
	console.log("Solution: ");
	for(let i = 0; i < 3; ++i){
		if(soln[i] % 1 != 0){
			x.innerHTML += "x" + i + ": " + soln[i].toFixed(4) + "<br>";
			
			console.log("x" + i + ": " + soln[i].toFixed(4));
		} else{
			x.innerHTML += "x" + i + ": " + soln[i].toFixed(4) + "<br>";
			
			console.log("x" + i + ": " + soln[i].toFixed(4));
		}
	}
}

let reset = function(){
	system = [];
	leftCol = 0;
	pivots = [];
	basic = [];
	soln = [];
}

let submitOnClick = function(){
	reset();
	getSystem();
	rowReduction(0);
	rowReduction(1);
	rowReduction(2);
	determineVar();
	solve();
	printSoln();
}

