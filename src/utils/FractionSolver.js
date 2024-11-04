// Helper function to calculate the GCD of two numbers
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

// Helper function to reduce a fraction to its simplest form
function reduceFraction(numerator, denominator) {
  const divisor = gcd(Math.abs(numerator), Math.abs(denominator))
  return [numerator / divisor, denominator / divisor]
}

// Function to convert a whole/mixed number string to an improper fraction
function toFraction(whole, numerator, denominator) {
  const n = Math.abs(whole) * denominator + numerator
  return [whole < 0 ? -n : n, denominator]
}

// Function to add two fractions
function addFractions(n1, d1, n2, d2) {
  const numerator = n1 * d2 + n2 * d1
  const denominator = d1 * d2
  return reduceFraction(numerator, denominator)
}

// Function to subtract two fractions
function subtractFractions(n1, d1, n2, d2) {
  const numerator = n1 * d2 - n2 * d1
  const denominator = d1 * d2
  return reduceFraction(numerator, denominator)
}

// Function to multiply two fractions
function multiplyFractions(n1, d1, n2, d2) {
  const numerator = n1 * n2
  const denominator = d1 * d2
  return reduceFraction(numerator, denominator)
}

// Function to divide two fractions
function divideFractions(n1, d1, n2, d2) {
  const numerator = n1 * d2
  const denominator = d1 * n2
  return reduceFraction(numerator, denominator)
}

// Function to convert an improper fraction to a mixed number string
function formatFraction(numerator, denominator) {
  const [reducedNumerator, reducedDenominator] = reduceFraction(numerator, denominator)
  const whole = Math.trunc(reducedNumerator / reducedDenominator)
  const remainder = Math.abs(reducedNumerator % reducedDenominator)
  if (whole === 0) return `${reducedNumerator}/${reducedDenominator}` // Proper fraction
  if (remainder === 0) return `${whole}` // Whole number
  return `${whole} ${remainder}/${reducedDenominator}` // Mixed number
}

// Function to calculate based on operation
function calculate(n1, d1, n2, d2, operation) {
  switch (operation) {
    case "+":
      return addFractions(n1, d1, n2, d2)
    case "-":
      return subtractFractions(n1, d1, n2, d2)
    case "*":
      return multiplyFractions(n1, d1, n2, d2)
    case "/":
      return divideFractions(n1, d1, n2, d2)
    default:
      throw new Error("Invalid operation. Choose +, -, *, or /.")
  }
}

// Function to parse input strings
export default function FractionSolver(expression) {
  // Split by whitespace to identify components
  const parts = expression.match(
    /(\d+\s\d+\/\d+|\d+\/\d+|\d+)\s*([+\-*/])\s*(\d+\s\d+\/\d+|\d+\/\d+|\d+)/
  )
  if (!parts) throw new Error("Invalid expression format")

  // Parse first fraction/number
  const [_, firstPart, operator, secondPart] = parts

  const [n1, d1] = parseFraction(firstPart)
  const [n2, d2] = parseFraction(secondPart)

  // Calculate result
  const [resultNumerator, resultDenominator] = calculate(
    n1,
    d1,
    n2,
    d2,
    operator
  )

  // Format and return result as a simplified or mixed fraction
  return formatFraction(resultNumerator, resultDenominator)
}

// Helper function to parse individual fractions or mixed numbers
function parseFraction(part) {
  if (part.includes(" ")) {
    // Mixed number (e.g., '13 12/23')
    const [whole, fraction] = part.split(" ")
    const [numerator, denominator] = fraction.split("/").map(Number)
    return toFraction(Number(whole), numerator, denominator)
  } else if (part.includes("/")) {
    // Simple fraction (e.g., '3/4')
    const [numerator, denominator] = part.split("/").map(Number)
    return [numerator, denominator]
  } else {
    // Whole number (e.g., '5')
    return [Number(part), 1]
  }
}
