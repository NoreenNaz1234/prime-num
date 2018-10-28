function clickMe() {
	let user = parseInt(document.querySelector("input").value);
	let i;
	for(i=2; i < user; i++) {
		if (user % i === 0) {
			break;
		}
		// console.log(i)
	}         
	if (i === user) {
		console.log("yes");
	} else{
		console.log("not")
	}

}
