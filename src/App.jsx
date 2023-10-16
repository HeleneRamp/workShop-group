import { useState } from 'react'
import './App.css'
import ParrotCard from './components/ParrotCard'
import NavBar from './components/NavBar'


const parrotList = [
  {
    species: "Ara",
    name: "Coco",
    imgSrc: "./img/redParrot.png"
  },
  {
    species: "Gabon Gray",
    name: "Snoopy",
    imgSrc: "./img/gabonGray.png"
  },
  {
    species: "Amazon",
    name: "Jacko",
    imgSrc: "/img/amazon.png",
  },
  {
    species: "Macaws",
    name: "Polly",
    imgSrc: "./img/arras.png",
  },
]

function App() {

  const [parrotIndex, setParrotIndex]=useState(0)

  return (
    <>
      <h1 className='titleH1'>Parrot Land</h1>   
      <ParrotCard parrotList={parrotList[parrotIndex]}/>
      <NavBar
      parrotIndex={parrotIndex}
      setParrotIndex={setParrotIndex}
      parrotList={parrotList}
      /> 
    </>
  )
}

export default App
