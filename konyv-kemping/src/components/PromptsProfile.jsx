import React, { useState } from 'react'
import { useEffect } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { updatePrompt } from '../contexts/ManageData'


function PromptsProfile({ prompt }) {

  const { currentUser } = useAuth()

  const [promptToUpdateName, setPromtToUpdateName] = useState("")
  const [promptToUpdateCompleted, setPromtToUpdateCompleted] = useState(prompt.isCompleted)

  const promptUpdate = () => {
    setPromtToUpdateName(prompt.promptName)
    setPromtToUpdateCompleted(!promptToUpdateCompleted)
    console.log(promptToUpdateCompleted, promptToUpdateName)
  }

  useEffect(() => {
    if (currentUser && promptToUpdateName) {
      updatePrompt(currentUser.uid, promptToUpdateName, promptToUpdateCompleted)
    }
  }, [currentUser, promptToUpdateName, promptToUpdateCompleted])

  return (
    <>
      <ListGroup.Item as="li" className={"guild-card d-flex justify-content-between align-items-center"}>
        <p className={'mb-0' + (promptToUpdateCompleted ? " prompt-done" : "")}>{prompt.promptName}</p>
        <Button onClick={promptUpdate} className="d-flex justify-content-center align-items-center">{promptToUpdateCompleted ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        </svg>}</Button>
      </ListGroup.Item>
    </>
  )
}

export default PromptsProfile