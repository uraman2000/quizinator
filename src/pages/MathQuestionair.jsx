import React, { useState } from "react"
import check from "../assets/check.svg"
import xCircle from "../assets/x-circle.svg"
import FractionQuizGenerator from "../utils/FractionQuizGenerator"
import FractionSolver from "../utils/FractionSolver"
import Timer from "../components/Timer"

console.log(FractionSolver("5 2/3 - 2 1/3")) // Output: "3/8"
export default function MathQuestionair() {
  const [state, setState] = useState(["", "", "", "", "", "", "", "", "", ""])
  const [questions, setQuestions] = useState(FractionQuizGenerator("easy", "+"))
  const [isCorrect, setIsCorrect] = useState(Array(questions.length).fill(null))

  const answers = questions.map(item => FractionSolver(item))

  const onVerify = key => {
    const isAnswerCorrect = state[key] === answers[key]
    console.log(answers[key])
    setIsCorrect(prev => {
      const updatedIsCorrect = [...prev]
      updatedIsCorrect[key] = isAnswerCorrect
      return updatedIsCorrect
    })
  }

  const ShowValid = key => {
    if (isCorrect[key] === null) return null
    return (
      <img
        className="h-8 w-8"
        src={isCorrect[key] ? check : xCircle}
        alt={isCorrect[key] ? "Correct" : "Incorrect"}
      />
    )
  }

  return (
    <div>
      <Timer/>
      {questions.map((item, key) => (
        <div key={key} className="flex items-center gap-5">
          <div className="p-4">
            {key + 1}.) {item} =
          </div>
          <input
            type="text"
            value={state[key]}
            onChange={e =>
              setState(prev => {
                const updatedState = [...prev]
                updatedState[key] = e.target.value
                return updatedState
              })
            }
            className="rounded-md border-black px-4 border"
          />
          <button
            onClick={() => onVerify(key)}
            className="bg-green-500 px-4 py-1 text-white hover:bg-green-400 rounded-md"
          >
            Check
          </button>
          {ShowValid(key)}
        </div>
      ))}
    </div>
  )
}
