import React, { useState } from 'react'
import AddBookToTbr from '../components/AddBookToTbr'
import TbrBooks from '../components/TbrBooks'

function TBR() {

  const [tbr, setTbr] = useState([])

  return (
    <>
      <AddBookToTbr tbr={tbr} setTbr={setTbr}/>
      <TbrBooks tbr={tbr} setTbr={setTbr}/>
    </>
  )
}

export default TBR