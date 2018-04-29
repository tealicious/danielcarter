class Lyrics {
  bottleToBreak(num, capitalize = true) {
    if (num === 0 && capitalize) return "No more bottles";
    if (num === 0) return "no more bottles";
    if (num === 1) return "1 bottle";
    return `${num} bottles`;
  }
  bottlesToCount(num) {
    if (num > 1 && num !== 2) return `${num - 1} bottles`;
    if (num === 2) return `${num - 1} bottle`;
    if (num === 1) return "no more bottles";
    if (num === 0) return "99 bottles";
  }
  conditionalVerse(num) {
    if (num === 0) return "Go to the store and buy some more";
    return `Take ${num === 1 ? "it" : "one"} down and pass it around`;
  }
  verse(num) {
    return `${this.bottleToBreak(
      num
    )} of beer on the wall, ${this.bottleToBreak(num, false)} of beer.
${this.conditionalVerse(num)}, ${this.bottlesToCount(
      num
    )} of beer on the wall.`;
  }
  verses(max, min) {
    let lyrics = "";
    for (let i = max; i >= min; i--) {
      if (i === min) {
        lyrics += this.verse(i);
      } else {
        lyrics += `${this.verse(i)}

`;
      }
    }
    return lyrics;
  }
  song() {
    return this.verses(99, 0);
  }
}
module.exports = Lyrics;
