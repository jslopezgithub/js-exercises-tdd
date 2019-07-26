var removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

module.exports = removeVowelsForWords;
input = ["Javier", "Myra", "Massimo"]
result = removeVowelsForWords(input)
