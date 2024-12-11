import React, { useRef, useState } from "react"
import { GenerateQuestions } from "../utils/GenerateQuestions"
import html2canvas from "html2canvas"
import Timer from "../components/Timer"

export default function Proportions() {
  const [questions, setQuestions] = useState(GenerateQuestions())

  const componentRef = useRef()

  const captureAndDownloadImage = () => {
    html2canvas(componentRef.current).then(canvas => {
      const imageURL = canvas.toDataURL("image/png") // Convert canvas to data URL
      const link = document.createElement("a")
      link.href = imageURL
      link.download = "captured-image.png" // Set the file name
      link.click() // Trigger the download
    })
  }

  const Indicator = key => {
    console.log(questions[key].isCorrect)
    if (questions[key].isCorrect == undefined) {
      return null
    }
    if (questions[key].isCorrect) {
      return (
        <div className="text-green-500">
          Well, it's about time you got it right!
        </div>
      )
    }
    return (
      <div className="text-red-500">
        Your answer is wrong like in a 3 x million!
      </div>
    )
  }

  const onChangeInput = (e, key) => {
    const inputAnswer = parseFloat(e.currentTarget.value)
    const correctAnswer = questions[key].answer
    console.log(correctAnswer)
    // Update isCorrect based on comparison of inputAnswer and correctAnswer
    const updatedQuestions = [...questions]
    updatedQuestions[key].isCorrect = inputAnswer == correctAnswer

    setQuestions(updatedQuestions) // Update the state to re-render the component
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-end animate-bounce ">
        <div className="">
          make sure you download this! and send it to mommy!
        </div>
        <button
          className="bg-green-500 mr-60 text-white py-2 px-6 rounded-md"
          onClick={captureAndDownloadImage}
        >
          Download
        </button>
      </div>
      <div ref={componentRef}>
        <div className=" top-0 w-full pt-20 md:pt-10 md:left-0">
          <Timer />
        </div>
        <div className="flex w-full flex-wrap sm:flex-row flex-col pb-2">
          {questions.map((item, key) => (
            <div key={key} className="mt-6 w-full sm:w-1/2 px-10">
              <p className="text-xl">
                <span>{key + 1}.) </span>
                {item.question}
              </p>
              <input
                onChange={e => onChangeInput(e, key)}
                className="border border-black mt-2 p-2"
                type="number"
              />

              {Indicator(key)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
