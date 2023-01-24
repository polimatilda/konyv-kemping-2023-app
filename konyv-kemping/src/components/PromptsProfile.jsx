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
    if(currentUser && promptToUpdateName) {
      updatePrompt(currentUser.uid, promptToUpdateName, promptToUpdateCompleted)
    }
  }, [currentUser, promptToUpdateName, promptToUpdateCompleted])

  return (
    <>
      <ListGroup.Item as="li" className={"guild-card d-flex justify-content-between" + (promptToUpdateCompleted ? " prompt-done" : "")}>
        {prompt.promptName}
        <Button onClick={promptUpdate}>{promptToUpdateCompleted ? "Mégsem" : "Kész!"}</Button>
      </ListGroup.Item>
    </>
  )
}

export default PromptsProfile