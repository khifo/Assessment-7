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
  
  // 2) Unique Characters
  function UniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
      if (word.lastIndexOf(word[i]) !== i) {
        return false;
      }
    }
    return true;
  }
  