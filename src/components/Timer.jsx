import React, { useState, useEffect } from "react"

const Timer = () => {
  const [time, setTime] = useState(3600) // Start from 1 hour in seconds
//   const [time, setTime] = useState(5) // Start from 1 hour in seconds
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      // Refresh the page when the countdown reaches zero
      window.location.reload();
    }
  }, [time]);
  const formatTime = timeInSeconds => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0")
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(
      2,
      "0"
    )
    const seconds = String(timeInSeconds % 60).padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div className="flex justify-center pb-8">
      <h1 className="text-2xl font-semibold">Self Destruct in: {formatTime(time)} 😈</h1>
    </div>
  )
}

export default Timer
