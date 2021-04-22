function randomDice(sides) {
  const rng = Math.random();
  return Math.round(rng * sides);
}
// console.log(randomDice(10))

module.exports = {
  randomDice
}