/**
 *  'g' -> is a modifier.
 *  "g" ==> it perform a global matching pattern .
 *
 *     RegExp -> it stands for regular expression, used for matching a similar  pattern which is matched.
 */

function correctfn(sentence, wrong, correct) {
  return sentence.replace(new RegExp(wrong, "g"), correct);
}

let sentence = "This is the wrong sentance.";
let correctedSentence = correctfn(sentence, "sentance", "sentence");
console.log(correctedSentence);
