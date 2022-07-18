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

for(var name in countedWord) {
	countedWordArr.push([name, countedWord[name]])
}

countedWordArr.sort(function(a, b){
	return a[1] - b[1];
})
