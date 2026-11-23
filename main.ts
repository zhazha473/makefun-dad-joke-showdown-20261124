// Dad Joke Showdown — "Grill-Master in Training"
//
// Construction: a first-person setup at the family grill (one house rule,
// quoted verbatim), a concrete moment — the son breaks the rule at
// Saturday's barbecue and claims the title — then the punchline turns on
// a single word in the last sentence. "Grounded" is both the punishment
// for breaking the rule and a nod to the ground beef he just flipped, so
// the pun lands in the final word with nothing left to explain.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told the kids the grill has one rule: 'Dad flips, nobody touches.' My son flipped a burger at Saturday's barbecue and asked, 'Does that make me grill-master now?' I said, 'No. You're grounded.'";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
