//JavaScript Basics: Variables.
//example of using varaibles. Loan Calculator
principal= parseFloat(process.argv[2]);
time=parseFloat(process.argv[3]);
interest=parseFloat(process.argv[4])/100;
months=time * 12;
monthlyPayment=(interest + (interest/(Math.pow(1+interest, months) -1))) * principal;
console.log(monthlyPayment);


 