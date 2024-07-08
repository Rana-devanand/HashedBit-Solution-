/**
 * let str = 'I love my India'
 * output expected = 'India my love I'
 * Write code for this.
 */
let str = "I love my India";
let j = 0;
let val = "";
let zeroIndexValue = str[0];
for (let i = 1; i < str.length; i++) {
  val[j++] = str[i];
}
console.log(val);
