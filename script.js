function firstChar(text) {
  // your code here
	let newStr = text.trim();
	for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== ' ') {
      return newStr[i];
    }
  }
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
