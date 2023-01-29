import React, { useEffect, useState } from 'react'
import AddBookToTbr from '../components/AddBookToTbr'
import TbrBooks from '../components/TbrBooks'
import { useAuth } from '../contexts/AuthContext'
import { getChosenGuild } from '../contexts/ManageData'

function TBR() {

  const [tbr, setTbr] = useState([])
  const [prompts, setPrompts] = useState([])
  const [isGuildChosen, setIsGuildChosen] = useState(false)
  const [minBooks, setMinBooks] = useState(0)

  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      getChosenGuild(currentUser.uid)
        .then(user => user.prompts === undefined ? setIsGuildChosen(false) : setIsGuildChosen(true))
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser && isGuildChosen) {
      getChosenGuild(currentUser.uid)
        .then(user => {
          setPrompts(user.prompts)
          setMinBooks(user.minStories)
        })
    }
  }, [currentUser, isGuildChosen])

  return (
    <>
      <AddBookToTbr tbr={tbr} setTbr={setTbr} prompts={prompts} currentUser={currentUser} isGuildChosen={isGuildChosen}/>
      <TbrBooks tbr={tbr} setTbr={setTbr} minBooks={minBooks} isGuildChosen={isGuildChosen}/>
    </>
  )
}

export default TBR