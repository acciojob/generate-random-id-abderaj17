function makeid(l) {
  // write your code here
	let randomStr = ""
	let possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(let i = 0; i<l; i++){
		let randomIndex = Math.floor(Math.random()*possibleChars.length);
		randomStr += possibleChars[randomIndex];
	}
	return randomStr;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
