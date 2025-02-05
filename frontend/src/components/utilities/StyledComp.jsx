"use client"

import { useState, useEffect } from "react"

const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/6a0b08a518b223cc.png?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/b534ac69003a5693.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/21c72584989b09a9.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/a19748ac5ccc2021.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/c928b14a5cddaf18.jpg?q=90",
  ];

export default function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-screen flex-shrink-0">
            <img
              src={src || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

