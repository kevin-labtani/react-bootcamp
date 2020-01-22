import foods from "./foods";
import { choice, remove } from "./helpers";

// draw a fruit
let randFruit = choice(foods);
console.log("I'd like one " + randFruit + " , please");
console.log("Here you go: " + randFruit);
console.log("delicious, can I have another?");
// remove the fruit
let remaining = remove(foods, randFruit);
console.log(
  "I'm sorry we're all out; We have " + remaining.length + " other fruits left"
);
