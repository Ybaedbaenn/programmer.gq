const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const puzzles = [
	[
		[4, 0, 5, 0, 0, 0, 0, 2, 0],
		[0, 0, 0, 7, 2, 4, 6, 5, 3],
		[3, 0, 2, 9, 0, 0, 8, 1, 4],
		[2, 4, 0, 8, 1, 0, 0, 0, 5],
		[0, 5, 1, 0, 0, 0, 2, 6, 0],
		[8, 0, 0, 0, 5, 2, 0, 4, 7],
		[5, 2, 9, 0, 0, 8, 4, 0, 6],
		[1, 8, 4, 5, 3, 6, 0, 0, 0],
		[0, 3, 0, 0, 0, 0, 5, 0, 1]
	],
	[
		[1, 2, 0, 9, 0, 4, 0, 0, 0],
		[0, 4, 9, 7, 0, 6, 0, 1, 0],
		[7, 0, 6, 0, 0, 0, 4, 9, 2],
		[0, 0, 0, 3, 0, 7, 2, 6, 9],
		[6, 9, 0, 1, 0, 8, 0, 7, 4],
		[4, 3, 7, 6, 0, 2, 0, 0, 0],
		[5, 1, 8, 0, 0, 0, 7, 0, 3],
		[0, 6, 0, 2, 0, 5, 8, 4, 0],
		[0, 0, 0, 8, 0, 3, 0, 5, 6]
	],
	[
		[2, 6, 0, 0, 7, 0, 4, 8, 3],
		[3, 1, 0, 0, 0, 0, 0, 0, 9],
		[5, 7, 0, 3, 4, 0, 0, 0, 2],
		[1, 0, 0, 0, 0, 0, 9, 0, 0],
		[0, 8, 0, 0, 9, 0, 0, 3, 0],
		[0, 0, 7, 0, 0, 0, 0, 0, 5],
		[7, 0, 0, 0, 5, 2, 0, 9, 4],
		[8, 0, 0, 0, 0, 0, 0, 5, 7],
		[9, 5, 6, 0, 3, 0, 0, 2, 1]
	],
	[
		[4, 0, 1, 2, 9, 0, 0, 7, 5],
		[2, 0, 0, 3, 0, 0, 8, 0, 0],
		[0, 7, 0, 0, 8, 0, 0, 0, 6],
		[0, 0, 0, 1, 0, 3, 0, 6, 2],
		[1, 0, 5, 0, 0, 0, 4, 0, 3],
		[7, 3, 0, 6, 0, 8, 0, 0, 0],
		[6, 0, 0, 0, 2, 0, 0, 3, 0],
		[0, 0, 7, 0, 0, 1, 0, 0, 4],
		[8, 9, 0, 0, 6, 5, 1, 0, 7]
	],
	[
		[0, 1, 2, 7, 5, 3, 6, 0, 9],
		[9, 4, 0, 0, 8, 2, 1, 7, 5],
		[6, 0, 5, 4, 0, 1, 0, 8, 0],
		[1, 0, 4, 2, 3, 0, 8, 9, 6],
		[3, 6, 9, 8, 0, 0, 0, 2, 1],
		[0, 8, 7, 0, 6, 9, 5, 0, 4],
		[0, 2, 0, 9, 7, 4, 3, 0, 0],
		[4, 3, 0, 0, 2, 6, 9, 0, 7],
		[7, 0, 6, 3, 1, 0, 0, 5, 2]
	]
];
var board;
var gamewon = false;
board = puzzles[Math.floor(Math.random() * 5)]


var display = [[], [], [], [], [], [], [], [], []];
for(var x = 0; x < 9; x++){
	for(var y = 0; y < 9; y++){
		display[x].push(document.getElementById((x+1).toString()+"-"+(y+1).toString()));
	}
}
const wintext = document.getElementById("wintext");


for(var x = 0; x < 9; x++){
	for(var y = 0; y < 9; y++){
		if (board[x][y] != 0){
			display[x][y].value = board[x][y];
			display[x][y].style.color = "#ff7900";
			display[x][y].disabled = true;
		}
	}
}


function fieldtox(name){
	return name.charAt(0);
}
function fieldtoy(name){
	return name.charAt(2);
}
function fieldtobox(name){
	var x = name.charAt(0);
	var y = name.charAt(2);
	if ((x == 1) || (x == 2) || (x == 3)){
		if ((y == 1) || (y == 2) || (y == 3)){
			return 1;
		}
		if ((y == 4) || (y == 5) || (y == 6)){
			return 2;
		}
		if ((y == 7) || (y == 8) || (y == 9)){
			return 3;
		}
	}
	if ((x == 4) || (x == 5) || (x == 6)){
		if ((y == 1) || (y == 2) || (y == 3)){
			return 4;
		}
		if ((y == 4) || (y == 5) || (y == 6)){
			return 5;
		}
		if ((y == 7) || (y == 8) || (y == 9)){
			return 6;
		}
	}
	if ((x == 7) || (x == 8) || (x == 9)){
		if ((y == 1) || (y == 2) || (y == 3)){
			return 7;
		}
		if ((y == 4) || (y == 5) || (y == 6)){
			return 8;
		}
		if ((y == 7) || (y == 8) || (y == 9)){
			return 9;
		}
	}
}
function testbox(boxno, digit, name){
	if(boxno == 1){
		var x = 1;
		var y = 1;
	}
	if(boxno == 2){
		var x = 1;
		var y = 4;
	}
	if(boxno == 3){
		var x = 1;
		var y = 7;
	}
	if(boxno == 4){
		var x = 4;
		var y = 1;
	}
	if(boxno == 5){
		var x = 4;
		var y = 4;
	}
	if(boxno == 6){
		var x = 4;
		var y = 7;
	}
	if(boxno == 7){
		var x = 7;
		var y = 1;
	}
	if(boxno == 8){
		var x = 7;
		var y = 4;
	}
	if(boxno == 9){
		var x = 7;
		var y = 7;
	}
	var result = 0;
	for(var x2 = x; x2 < x + 3; x2++){
		for(var y2 = y; y2 < y + 3; y2++){
			if((board[x2-1][y2-1] == digit) && (! ((x2 == fieldtox(name)) && (y2 == fieldtoy(name))))){
				result = boxno;
			}
		}
	}
	return result;
}
function testrow(rowno, digit, name){
	var x = rowno;
	var result = 0;
	for(var y = 0; y < 9; y++){
		if((board[x-1][y] == digit) && (! ((x == fieldtox(name)) && ((y + 1) == fieldtoy(name))))){
			result = rowno;
		}
	}
	return result;
}
function testcol(colno, digit, name){
	var y = colno;
	var result = 0;
	for(var x = 0; x < 9; x++){
		if((board[x][y-1] == digit) && (! (((x + 1) == fieldtox(name)) && (y == fieldtoy(name))))){
			result = colno;
		}
	}
	return result;
}


function testinput(field){
	var inputproc = field.value.trim().toLowerCase();
	if (! gamewon){
		if(! ((digits.includes(inputproc)) || (inputproc == ""))){
			alert("Podaj jedną cyfrę od 1 włącznie do 9 włącznie.");
			if(board[fieldtox(field.id) - 1][fieldtoy(field.id) - 1] != 0){
				field.value = board[fieldtox(field.id) - 1][fieldtoy(field.id) - 1];
			}else{
				field.value = "";
			}
		}else{
			if((digits.includes(inputproc))){
				if(testbox(fieldtobox(field.id), inputproc, field.id) == 0){
					if(testrow(fieldtox(field.id), inputproc, field.id) == 0){
						if(testcol(fieldtoy(field.id), inputproc, field.id) == 0){
							board[fieldtox(field.id) - 1][fieldtoy(field.id) - 1] = inputproc;
							gamewon = true;
							for(var x = 0; x < 9; x++){
								for(var y = 0; y < 9; y++){
									if (board[x][y] == 0){
										gamewon = false;
									}
								}
							}
							if (gamewon){
								wintext.innerText = "Wygrana!";
								for(var x = 0; x < 9; x++){
									for(var y = 0; y < 9; y++){
										display[x][y].disabled = true;
									}
								}
							}
						}else{
							alert("Błąd: cyfra " + inputproc + " znajduje się już w kolumnie " + testcol(fieldtoy(field.id), inputproc, field.id) + " (licząc od 1 włącznie, od lewej).");
							field.value = "";
						}
					}else{
						alert("Błąd: cyfra " + inputproc + " znajduje się już w rzędzie " + testrow(fieldtox(field.id), inputproc, field.id) + " (licząc od 1 włącznie, od góry).");
						field.value = "";
					}
				}else{
					alert("Błąd: cyfra " + inputproc + " znajduje się już w kwadracie " + testbox(fieldtobox(field.id), inputproc, field.id) + " (licząc od 1 włącznie, od górnego lewego rogu w prawo i w dół).");
					field.value = "";
				}
			}else{
				field.value = "";
				board[fieldtox(field.id) - 1][fieldtoy(field.id) - 1] = 0;
			}
		}
	}
}
