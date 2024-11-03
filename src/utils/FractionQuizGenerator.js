function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Utility function to create a simple fraction as a string
function createFraction(numerator, denominator) {
  return `${numerator}/${denominator}`
}

// Utility function to create a mixed number as a string
function createMixedNumber(whole, numerator, denominator) {
  return `${whole} ${numerator}/${denominator}`
}

// Function to generate a random operation
function getRandomOperation() {
  const operations = ["+", "-", "*", "/"]
  return operations[randomInt(0, operations.length - 1)]
}

// Function to generate a question based on difficulty and operation
function generateQuestion(difficulty, operation) {
  // Choose a random operation if operation is set to "random"
  const chosenOperation =
    operation === "random" ? getRandomOperation() : operation
  let question

  switch (difficulty) {
    case "easy":
      // Simple fractions with single digits
      const easyNum1 = randomInt(1, 9)
      const easyDenom1 = randomInt(1, 9)
      const easyNum2 = randomInt(1, 9)
      const easyDenom2 = randomInt(1, 9)
      question = `${createFraction(
        easyNum1,
        easyDenom1
      )} ${chosenOperation} ${createFraction(easyNum2, easyDenom2)}`
      break

    case "medium":
      // Mixed numbers with single-digit components
      const medWhole1 = randomInt(1, 9)
      const medNum1 = randomInt(1, 9)
      const medDenom1 = randomInt(1, 9)
      const medWhole2 = randomInt(1, 9)
      const medNum2 = randomInt(1, 9)
      const medDenom2 = randomInt(1, 9)
      question = `${createMixedNumber(
        medWhole1,
        medNum1,
        medDenom1
      )} ${chosenOperation} ${createMixedNumber(medWhole2, medNum2, medDenom2)}`
      break

    case "hard":
      // Mixed numbers with two-digit whole numbers
      const hardWhole1 = randomInt(10, 99)
      const hardNum1 = randomInt(1, 9)
      const hardDenom1 = randomInt(1, 9)
      const hardWhole2 = randomInt(10, 99)
      const hardNum2 = randomInt(1, 9)
      const hardDenom2 = randomInt(1, 9)
      question = `${createMixedNumber(
        hardWhole1,
        hardNum1,
        hardDenom1
      )} ${chosenOperation} ${createMixedNumber(
        hardWhole2,
        hardNum2,
        hardDenom2
      )}`
      break

    default:
      throw new Error(
        "Invalid difficulty level. Choose 'easy', 'medium', or 'hard'."
      )
  }

  return question
}

// Main function to generate a 10-question quiz
export default function FractionQuizGenerator(difficulty, operation) {
  const quiz = []

  for (let i = 0; i < 10; i++) {
    quiz.push(generateQuestion(difficulty, operation))
  }

  return quiz
}
