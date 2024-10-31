import React from 'react'
import { useMyContext } from '../store/UseContext'

const EndPage = () => {
  const { data } = useMyContext()
  console.log(data)

  return (
    <div className='h-screen w-full bg-zinc-100 flex flex-col justify-center items-center'>
      <h1 className='text-black text-2xl capitalize font-bold font-sans'>Your Answers</h1>
      {data && data.answers && data.answers.length > 0 ? (
        data.answers.map((item, index) => (
          <p key={index}>Question {item.questionId}: {item.selectedOption}</p>
        ))
      ) : (
        <p>No answers found.</p>
      )}
    </div>
  )
}

export default EndPage