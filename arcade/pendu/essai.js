var string = "orthophoniste";
var char = "o";
var letterInWord = string.includes(char);
var j = 0;

for (var i in string) {
    if (string[i] === char) {
        console.log("find letter");
        j+=1;
        
    }
 
}

var temp = "Orhtophoniste";

function countOcurrences(str, value) {
  var regExp = new RegExp(value, "gi");
  return (str.match(regExp) || []).length;
}

console.log(countOcurrences(temp, char));

