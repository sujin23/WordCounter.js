// 1) 현재 웹페이지의

// 2) 모든 텍스트에서
var entireText = document.getElementsByTagName('body')[0].innerText;

// 3) 단어들을 쪼갠 후에
var splitedText = entireText.split(' ');

// 4) 등장 횟수를 계산하고
var countedWord = {};
for(var i = 0; i < splitedText.length; i++){
	var word = splitedText[i];
	if(countedWord[word] == undefined) {
		countedWord[word] = 1;
	} else {
		countedWord[word] = countedWord[word] + 1;
	}
}