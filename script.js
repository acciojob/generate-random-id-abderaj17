function makeid(l) {
  // write your code here
	let randomStr = ""
	let possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(let i = 0; i<l.length; i++){
		let tempStr = Math.floor(Math.random(i))*possibleChars;
		randomStr.push(tempStr);
	}
	return randomStr;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
