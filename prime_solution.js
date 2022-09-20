
// for checking prime.

var num = 71;
var count =0;
for ( var i =1 ; i<= num; i++){

  if (num % i  ==0){
   count++
  }
}
if ( count == 2){
  console.log("it is prime");
} else {
  console.log("it is not a prime")
};
