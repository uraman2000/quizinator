import React, { useState } from "react"
import check from "../assets/check.svg"
import xCircle from "../assets/x-circle.svg"
import FractionQuizGenerator from "../utils/FractionQuizGenerator"
import FractionSolver from "../utils/FractionSolver"
import Timer from "../components/Timer"

// console.log(FractionSolver("2 5/6 - 3 3/5")) // Output: "3/8"
// console.log(FractionSolver("3 8/8 - 8 7/2 ")) // Output: "3/8"
export default function MathQuestionair() {
  const [state, setState] = useState(["", "", "", "", "", "", "", "", "", ""])
  const [questions, setQuestions] = useState([])
  const [difficulty, setDifficulty] = useState("")
  const [operations, setOperations] = useState("")
  const [isShowError, setIsShowError] = useState(false)
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
  const onGenerateQuestion = () => {
    console.log(!difficulty)
    if (!difficulty || !operations) {
      setIsShowError(true)
    } else {
      setQuestions(FractionQuizGenerator(difficulty, operations))
    }
  }
  if (questions.length == 0) {
    return (
      <div className="p-8 flex gap-4">
        <select
          className="cursor-pointer border-black border rounded-md px-2 py-1"
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
        >
          <option value={""}> Difficulty</option>
          <option value={"easy"}> Easy</option>
          <option value={"medium"}> Medium</option>
          <option value={"hard"}> Hard</option>
        </select>
        <select
          className="cursor-pointer border-black border rounded-md px-2 py-1"
          value={operations}
          onChange={e => setOperations(e.target.value)}
        >
          <option value={""}> Operation</option>
          <option value={"+"}> Adds</option>
          <option value={"-"}> Subs</option>
          <option value={"*"}> Mults</option>
          <option value={"/"}> Divs</option>
          <option value={"random"}> Rands</option>
        </select>
        <button
          onClick={() => onGenerateQuestion()}
          className="bg-slate-800 px-4 py-1 text-white hover:bg-slate-900 rounded-md"
        >
          Start
        </button>
        {isShowError && (
          <div>
            <span className="text-red-500 font-extrabold">Oy fuccker!</span>{" "}
            select an opperation or dificulty if you don't wanted to be cut!,
            you dummy!
          </div>
        )}
      </div>
    )
  }
  return (
    <div>
      <div className="fixed bg-white top-0 w-full pt-20 md:pt-10 md:left-0">
        <Timer />
      </div>
      <div className="mt-20">
        {questions.map((item, key) => (
          <div
            key={key}
            className="flex flex-wrap items-center gap-5 p-2 md:gap-8 "
          >
            <div className="w-full md:w-auto p-2 text-base md:text-lg">
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
              className="w-full md:w-auto rounded-md border border-black px-4 py-2"
            />
            <div className="flex items-center w-full md:w-auto gap-8">
              <button
                onClick={() => onVerify(key)}
                className="w-full md:w-auto bg-green-500 px-4 py-2 text-white hover:bg-green-400 rounded-md"
              >
                Check
              </button>
              <div className="w-full md:w-auto">{ShowValid(key)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
