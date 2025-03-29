"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const type = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1))
        setTypingSpeed(75)
      } else {
        setCurrentText((prev) => word.substring(0, prev.length + 1))
        setTypingSpeed(150)
      }
    }

    const typingTimeout = setTimeout(() => {
      type()

      if (!isDeleting && currentText === word) {
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(typingTimeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <span className="inline-block">
        {currentText}
        <span className={cn("ml-0.5 inline-block h-4 w-0.5 animate-blink bg-primary", cursorClassName)} />
      </span>
    </div>
  )
}

