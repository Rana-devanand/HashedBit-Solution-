// Q9) Write a function to count the number of words in a paragraph.
let area = document.getElementById("area");
let char = document.getElementById("char");
let word = document.getElementById("word");

area.addEventListener("input", function () {
  // count characters
  let content = this.value;
  char.textContent = content.length;

  // remove empty spaces from start and end
  content.trim();
  console.log(content);

  let wordList = content.split(/\s/);

  // Remove spaces from between words
  let words = wordList.filter(function (element) {
    return element != "";
  });

  // count words
  word.textContent = words.length;
});
