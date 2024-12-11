import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import MathQuestionair from "./pages/MathQuestionair"
import Proportions from "./pages/Proportions"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route path="math" element={<Proportions />} />
            <Route
              path="*"
              element={
                <h1> BISH THAT DOES NOT EXIST!!!! GO BACK DUMBASS!!!</h1>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
