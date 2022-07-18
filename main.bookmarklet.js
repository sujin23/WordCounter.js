var entireText = document.getElementsByTagName('body')[0].innerText;

var splitedText = entireText.split(' ');

var countedWord = {};
for(var i = 0; i < splitedText.length; i++){
	var word = splitedText[i].toLowerCase();
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
	return b[1] - a[1];
})

var str = '';
for(var i = 0; i < countedWordArr.length; i++){
    str = str + countedWordArr[i][0] + " : " + countedWordArr[i][1]+"\n"
}
alert(str)