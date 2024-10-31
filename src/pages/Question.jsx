import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMyContext } from '../store/UseContext'

const Question = () => {
  const questions = [
    { id: 1, text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], answer: 'Paris' },
    { id: 2, text: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { id: 3, text: 'What is the largest planet in our solar system?', options: ['Earth', 'Jupiter', 'Mars'], answer: 'Jupiter' },
    { id: 4, text: 'Who wrote the play "Romeo and Juliet"?', options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain'], answer: 'William Shakespeare' },
  ]
  const { id } = useParams()
  const questionId = parseInt(id) // Convert to integer
  const question = questions.find(q => q.id === questionId) // Find the question with the given ID

  const navigate = useNavigate()
  const { data, setData } = useMyContext()
  const [selectedOption, setSelectedOption] = useState(null)
  const [error, setError] = useState(false)

  const handleNext = (e) => {
    e.preventDefault()
    if (!selectedOption) {
      setError(true)
      return
    }

    setData((prev) => ({
      ...prev,
      answers: [...(prev.answers || []), { questionId, selectedOption }]
    }))

    if (questionId < questions.length) {
      navigate(`/question/${questionId + 1}`) // Navigate to the next question
    } else {
      navigate('/end') // Navigate to the end page
    }
  }

  if (!question) {
    return <div>No question found.</div>
  }

  const handleOnChange = (option) => {
    setSelectedOption(option)
    setError(false)
  }

  return (
    <div className='h-[20rem] w-[30rem] bg-zinc-200 pt-4 pb-8 rounded-lg shadow-xl flex flex-col justify-between items-center'>
      <h1 className='text-black text-2xl capitalize font-bold font-sans'>{question.text}</h1>
      <p>
        {error && <span className='text-red-500'>Please select an option</span>}
      </p>
      <div className='flex flex-col gap-y-3 bg-black/20 p-4 font-bold rounded-xl'>
        {question.options.map((option, index) => (
          <label key={index} className='flex items-center gap-x-3'>
            <input
              className='cursor-pointer'
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOnChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleNext} className='bg-indigo-600/30 p-3 rounded-xl text-black font-semibold'>Next</button>
    </div>
  )
}

export default Question