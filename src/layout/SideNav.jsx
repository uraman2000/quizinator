import React from "react";

const navList = [
  { name: "Home", link: "home" },
  { name: "Math", link: "math" },
  { name: "English" },
  { name: "Tagalog" },
];

export default function SideNav({ onClose }) {
  return (
    <div className="h-full p-6 bg-white">
      <div className="lg:hidden flex justify-end mb-4">
        <button
          className="p-2 bg-gray-800 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {navList.map((item, key) => (
        <a
          href={item.link || "#"}
          className="block w-full hover:bg-gray-300 cursor-pointer rounded-lg p-4"
          key={key}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
