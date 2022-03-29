import React from 'react'

export default function Question( { eachQuestion } ) {
    console.log(eachQuestion)
  return (
      <div>
          <strong>ID: {eachQuestion.id}</strong>
        <div>
            Question Text: {eachQuestion.question}
        </div>
        <div>
            <strong>empathy:</strong> {eachQuestion.empathy}
        </div>
        <div>
            <strong>assertiveness:</strong> {eachQuestion.assertiveness}
        </div>
        <div>
            <strong>creativity:</strong> {eachQuestion.creativity}
        </div>
        <div>
            <strong>ambition:</strong> {eachQuestion.ambition}
        </div>
        <div>
            <strong>optimism:</strong> {eachQuestion.optimism}
        </div>
    </div>
  )
}
