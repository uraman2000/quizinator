import React from "react"

const navList = [
  { name: "Home", link: "home" },
  { name: "Math", link: "math" },
  { name: "English" },
  { name: "Tagalog" },
]
export default function SideNav() {
  return (
    <div className="border-r border-gray shadow-xl h-screen p-6 fixed">
      {navList.map((item, key) => (
        <a
          href={item.link}
          className="flex flex-col w-full hover:bg-gray-300 cursor-pointer rounded-lg p-6"
          key={key}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
