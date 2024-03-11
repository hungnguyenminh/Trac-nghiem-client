

function generateRandom4DigitNumber() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
}

export {  generateRandom4DigitNumber };
