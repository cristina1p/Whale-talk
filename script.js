let input = "turpetine and turtles";

const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  if (input[inputIndex] === "e") {
    resultArray.push(input[inputIndex]);
  }

  if (input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }
  //console.log(`inpuIndex is ${inputIndex}`)
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    //console.log(`vowelsIndex is ${vowelsIndex}`)
    if (input[inputIndex] === vowels[vowelsIndex]) {
      //console.log(input[inputIndex]);
      resultArray.push(input[inputIndex]);
      //console.log(resultArray);
    }
  }
}

//console.log(resultArray);
const resultString = resultArray.join("").toUpperCase();

console.log(resultString);
