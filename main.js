var entireText = document.getElementsByTagName('body')[0].innerText;
var splitedText = entireText.split(' ');

for(var i = 0; i < splitedText.length; i++){
	console.log(splitedText[i])
}