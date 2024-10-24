/** @format */

//Tuesday: Find the longest Word in a String

function findLongestWord(sentence) {
  // Split the sentence into words
  var words = sentence.split(" ");

  // Initialize a variable to keep track of the maximum length
  var maxLength = 0;

  // Iterate through each word in the array
  for (var i = 0; i < words.length; i++) {
    // Update maxLength if the current word's length is greater
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  // Return the maximum length found
  return maxLength;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 6
console.log(findLongestWord("May the force be with you")); // Output: 5
