var entireText = document.getElementsByTagName('body')[0].innerText;

var splitedText = entireText.split(' ');

var countedWord = {};
for(var i = 0; i < splitedText.length; i++){
	var word = splitedText[i];
	if(countedWord[word] == undefined) {
		countedWord[word] = 1;
	} else {
		countedWord[word] = countedWord[word] + 1;
	}
}

