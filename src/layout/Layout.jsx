import React from "react"
import Home from "../pages/Home"
import SideNav from "./sideNav"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex">
      <div className="w-2/12 sticky">
        <SideNav />
      </div>
      <div className="w-10/12 p-8">
        <Outlet />
      </div>
    </div>
  )
}
