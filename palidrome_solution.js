
var str = "i love my india";

var bag = "";
for ( var i = str.length-1; i>=0; i--){
     bag+= str[i];
}
if ( str == bag){
  console.log("palindrome");
} else  {
  console.log("Not a Palindrome");
}