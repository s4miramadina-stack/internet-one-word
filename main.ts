// The Internet in One Word
// Writes one word to /output/entry.txt and nothing else.
//
// Why this word: the internet is billions of people, bots and brands
// shouting at once with no grown-up in the room. Every corner of it, from
// comment sections to crypto to cat videos, is the same thing at scale:
// everybody, all at once, unsupervised.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const word = "Unsupervised";

// The gate: UTF-8 text of 1 to 30 characters, not only white space.
const chars = [...word].length;
if (chars < 1 || chars > 30 || word.trim() === "" || /\s/.test(word)) {
  throw new Error(`entry must be one word of 1-30 characters, got ${JSON.stringify(word)}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, word, "utf8");
console.log(`wrote ${chars} characters: ${word}`);
