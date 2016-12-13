function c(val){
	document.getElementById("display").value=val;
}

function math(val){
	console.log(val);
	if (!lastchar) {
		if (val == "00" || val == "0" || val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == ".") {
			document.getElementById("display").value+=val;
		} else {
			console.log(val);
			document.getElementById("display").value+=val;
			lastchar = true;
		}

	}
	else{ 
	if (val == "00" || val == "0" || val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == ".") {
			document.getElementById("display").value+=val; lastchar = false }
		}
}

function e(){
	try{
		c(eval(document.getElementById("display").value));
	}
	
	catch(e){
		c('Error')
	}
}

var lastchar = false;
