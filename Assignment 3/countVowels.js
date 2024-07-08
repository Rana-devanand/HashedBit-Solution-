// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
const str =
  "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes,";

let c = 0,
  v = 0;
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      v++;
    } else {
      c++;
    }
  }
}

console.log("Consonants are: ", c);
console.log("Vowels are: ", v);
