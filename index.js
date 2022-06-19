function reverse(word){
  let words = word.split("");
  let newWords = words.reverse();
  let reverseWords = newWords.join("");
  return reverseWords;
}


function isPalindrome(word) {
  const reverseWords = reverse(word)
  if(word === reverseWords){
    return true;
  }else {
    return false;
  }
}
 


/* 
  first split , reverse and join the word
  create an if else statement to return true or false
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
