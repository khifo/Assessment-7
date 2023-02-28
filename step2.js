// Step 2: Write Code
// 1) Sum zero
function SumToZero(numbers) {
    let seen = {};
    for (let i = 0; i < numbers.length; i++) {
      let current = numbers[i];
      if (-current in seen) {
        return true;
      }
      seen[current] = true;
    }
    return false;
  }
  // EXTRA CREDIT O(n)
  
  // 2)Unique Characters
  function UniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
      if (word.lastIndexOf(word[i]) !== i) {
        return false;
      }
    }
    return true;
  }
  // EXTRA CREDIT O(1)
  console.log(UniqueChars('hello'));
  console.log(UniqueChars('world'));

  // 3)Pangram sentence
  function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    sentence = sentence.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
      if (sentence.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    return true;
  } 
  // EXTRA CREDIT O(1)
console.log(isPangram('Pack my box with five dozen liquor jugs.')); 
console.log(isPangram('This sentence is not a pangram.')); 

// 4)Longest Word
function find_longest_word(words) {
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
      }
    }
    return longestWordLength;
  }
  // EXTRA CREDIT O(1)
  console.log(find_longest_word)(['blue', 'strawberry', 'pie']);
  console.log(find_longest_word)(['football', 'basketball', 'volleyball']);
