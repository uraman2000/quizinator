const questionTemplates = [
  {
    id: 1,
    question:
      "If {value1} kilograms of flour is needed for {value2} liters of water, how much flour is required for {value3} liters of water?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 2,
    question:
      "If {value1} liters of gas fills {value2} liters of space, how many liters of gas will be needed to fill {value3} liters of space?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 3,
    question:
      "If {value1} cups of sugar are needed for {value2} cups of flour, how many cups of sugar are needed for {value3} cups of flour?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 4,
    question:
      "If {value1} liters of water are used for {value2} kilograms of rice, how much water is needed for {value3} kilograms of rice?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 5,
    question:
      "If {value1} liters of juice require {value2} kilograms of sugar, how much sugar is needed for {value3} liters of juice?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 6,
    question:
      "If {value1} kilograms of flour are needed to make {value2} liters of dough, how much flour is required for {value3} liters of dough?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 7,
    question:
      "If {value1} liters of milk is used for {value2} kilograms of chocolate, how much milk is needed for {value3} kilograms of chocolate?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 8,
    question:
      "If {value1} grams of salt are needed for {value2} liters of water, how much salt is needed for {value3} liters of water?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 9,
    question:
      "If {value1} liters of oil is needed for {value2} liters of water, how much oil is needed for {value3} liters of water?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 10,
    question:
      "If {value1} liters of syrup are needed to make {value2} liters of lemonade, how much syrup is needed to make {value3} liters of lemonade?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 11,
    question:
      "If {value1} kilograms of cheese are needed for {value2} liters of milk, how much cheese is needed for {value3} liters of milk?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 12,
    question:
      "If {value1} cups of water are needed for {value2} cups of rice, how much water is needed for {value3} cups of rice?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 13,
    question:
      "If {value1} grams of sugar are needed for {value2} liters of lemonade, how much sugar is needed for {value3} liters of lemonade?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 14,
    question:
      "If {value1} liters of paint cover {value2} square meters, how many liters are needed to cover {value3} square meters?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 15,
    question:
      "If {value1} kilograms of butter are required for {value2} kilograms of flour, how much butter is required for {value3} kilograms of flour?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 16,
    question:
      "If {value1} liters of gas cost {value2}, how much would {value3} liters of gas cost?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 17,
    question:
      "If {value1} cups of flour are needed for {value2} eggs, how much flour is required for {value3} eggs?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 18,
    question:
      "If {value1} liters of syrup make {value2} liters of lemonade, how much syrup is needed to make {value3} liters of lemonade?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 19,
    question:
      "If {value1} kilograms of potatoes are needed for {value2} liters of soup, how many kilograms of potatoes are needed for {value3} liters of soup?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 20,
    question:
      "If {value1} kilograms of rice make {value2} liters of porridge, how many kilograms of rice are needed for {value3} liters of porridge?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 21,
    question:
      "If {value1} grams of flour are needed for {value2} liters of dough, how much flour is needed for {value3} liters of dough?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 22,
    question:
      "If {value1} liters of fuel are needed for {value2} kilometers, how many liters are needed for {value3} kilometers?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 23,
    question:
      "If {value1} kilograms of beans are needed for {value2} cups of soup, how much beans are needed for {value3} cups of soup?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 24,
    question:
      "If {value1} liters of paint cover {value2} square meters, how many liters of paint are needed to cover {value3} square meters?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 25,
    question:
      "If {value1} kilograms of potatoes are used to make {value2} liters of soup, how much potatoes are needed for {value3} liters of soup?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 26,
    question:
      "If {value1} grams of honey are used for {value2} cups of tea, how much honey is needed for {value3} cups of tea?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 27,
    question:
      "If {value1} cups of sugar are needed for {value2} cups of milk, how many cups of sugar are needed for {value3} cups of milk?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 28,
    question:
      "If {value1} kilograms of rice are needed for {value2} liters of water, how much rice is needed for {value3} liters of water?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 29,
    question:
      "If {value1} grams of salt are needed for {value2} liters of soup, how much salt is needed for {value3} liters of soup?",
    formula: "value1 * value3 / value2",
  },
  {
    id: 30,
    question:
      "If {value1} cups of flour are needed for {value2} liters of batter, how much flour is needed for {value3} liters of batter?",
    formula: "value1 * value3 / value2",
  },
]

function generateRandomDecimal(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2)
}

export function GenerateQuestions() {
  const selectedQuestions = []
  const numQuestions = 10
  let id = 0
  while (selectedQuestions.length < numQuestions) {
    const randomQuestion =
      questionTemplates[Math.floor(Math.random() * questionTemplates.length)]

    // Generate random decimals for placeholders
    const value1 = generateRandomDecimal(0.5, 5)
    const value2 = generateRandomDecimal(1, 10)
    const value3 = generateRandomDecimal(1, 10)

    // Replace placeholders in the question
    const question = randomQuestion.question
      .replace("{value1}", value1)
      .replace("{value2}", value2)
      .replace("{value3}", value3)

    // Add the question with ID and solution
    selectedQuestions.push({
      id: id,
      tempID: randomQuestion.id,
      question: question,
      answer: eval(
        randomQuestion.formula
          .replace("value1", value1)
          .replace("value2", value2)
          .replace("value3", value3)
      ).toFixed(2),
    })
    id++
  }

  return selectedQuestions
}
