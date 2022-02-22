const letters = ["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś", "t", "u", "w", "y", "z", "ź", "ż"];
const words = ["gżegżółka", "żółć", "wizaż", "chrząszcz", "pszenżyto", "krztusiec", "rzeżucha", "skrzyżować", "emulgacja", "spółgłoska"];
var word = words[Math.floor(Math.random() * words.length)];
var wordletters = word.split("");
var passwd = new Array(word.length).fill("_");

var triesleft = 10;
var letterschecked = [];
var gameend = false;

const replaytext = document.getElementById("replaytext");
const endtext = document.getElementById("endtext");
const counter = document.getElementById("counter");
const letterinfo = document.getElementById("letterinfo");
const container = document.getElementById("innercontainer");
const pasword = document.createElement("h3");
const textnode = document.createTextNode(" _ ".repeat(word.length));
pasword.appendChild(textnode);
container.appendChild(pasword);



const theinput = document.getElementById("theinput");
theinput.addEventListener("keypress", function onsubmit(event){
	if((event.key === 'Enter') && ( ! (gameend))){
		let inputproc = theinput.value.trim().toLowerCase();
		if( ! (letters.includes(inputproc))){
			alert("Podaj jedną polską literę.");
			theinput.value = "";
		}else{
			if(wordletters.includes(inputproc)){
				theinput.value = "";
				if(passwd.includes(inputproc)){
					alert("Literę " + inputproc + " już odkryto.");
				}else{
					for(let i = 0; i < word.length; i++){
						if(wordletters[i] == inputproc){
							passwd[i] = inputproc;
						}
					}
					pasword.innerText = passwd.join(" ");
					if(wordletters.toString() == passwd.toString()){
						pasword.style.color = "#00ff00";
						endtext.innerText = "Wygrana!";
						endtext.style.color = "#00ff00";
						replaytext.innerText = "Wciśnij F5 żeby zagrać ponownie.";
						gameend = true;
					}
				}
			}else{
				triesleft -= 1;
				counter.innerText = "Pozostało szans: " + triesleft;
				letterschecked.push(inputproc);
				letterschecked.sort(function(a, b){return letters.indexOf(a) - letters.indexOf(b);});
				letterinfo.innerText = "Sprawdzone litery: " + letterschecked.join(", ");
				theinput.value = "";
				if(triesleft == 0){
					pasword.innerText = wordletters.join(" ");
					pasword.style.color = "#ff0000";
					endtext.innerText = "Przegrana";
					endtext.style.color = "#ff0000";
					replaytext.innerText = "Wciśnij F5 żeby zagrać ponownie.";
					gameend = true;
				}
			}
		}
    }
}); 