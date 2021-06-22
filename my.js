function add(n){
	document.getElementById("ans").innerHTML = 
   document.getElementById("ans").innerHTML + n;
}
function op(o){
   tempValue = document.getElementById("ans").innerHTML;
   document.getElementById("ans").innerHTML ="";
   tempOp = o;
}
function calc(){
	a = document.getElementById("ans");
	newValue = a.innerHTML;

	if(tempOp=="+"){
		 a.innerHTML = parseInt(tempValue) + parseInt(newValue)
	}
	else if(tempOp=="-"){
		a.innerHTML = parseInt(tempValue) - parseInt(newValue)
	}
	else if(tempOp=="/"){
		a.innerHTML = parseInt(tempValue) / parseInt(newValue)
   }
   else if(tempOp=="X"){
   	a.innerHTML = parseInt(tempValue) * parseInt(newValue)
   }
}