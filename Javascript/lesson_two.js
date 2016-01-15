// Control Structures
santa=true;

if(santa===true){
	console.log(2+5);
}
santa=false;
if (santa===false) {
	console.log(5-2);
}

testScore= process.argv[2];
if(testScore >=70){
	console.log("A");
}
else if (testScore>=60 && testScore<=69){
	console.log("B");
}
else if (testScore>=50 && testScore<=59) {
	console.log("C");
}
else if(testScore>=40 && testScore<=49){
	console.log("D");
}
else{
	console.log("E");
}
year=process.argv[2];
switch(year){ 
	case 1991: 
		console.log("My birthday"); 
		break; 
	case 1992: 
		console.log("Mike's birthday"); 
		break; 
	case 1995: 
		console.log("Don's birthday"); 
		break; 
	case 2001: 
		console.log("Edwins birthday"); 
		break; 
	default: console.log("John Doe's birthday"); 
		break; 
}
