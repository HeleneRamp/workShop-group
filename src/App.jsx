import { useState } from 'react'
import './App.css'
import ParrotCard from './components/ParrotCard'
import NavBar from './components/NavBar'


const parrotList = [
  {
    species: "Ara",
    name: "Coco",
    imgSrc: "./img/redParrot2.png",
    sing: "/sound/BirdSongAra.mp3",
  },
  {
    species: "Gabon Gray",
    name: "Snoopy",
    imgSrc: "./img/gabonGrey.png",
    sing: "/sound/BirdSongGabon.mp3",
  },
  {
    species: "Amazon",
    name: "Jacko",
    imgSrc: "./img/amazon2.png",
    sing: "/sound/BirdSongAmazon.mp3"
  },
  {
    species: "Cockatoo",
    name: "Polly",
    imgSrc: "./img/cockatoo.png",
    sing: "/sound/BirdSongCockatoo.mp3"
  },
  {
    species: "Budgie",
    name: "Banjo",
    imgSrc: "./img/budgie.png",
    sing: "/sound/BirdSongBudgie2.mp3",
  }
]

function App() {

  const [parrotIndex, setParrotIndex] = useState(0)

  return (
    <>

      <ParrotCard parrotList={parrotList[parrotIndex]} />
      <NavBar
        parrotIndex={parrotIndex}
        setParrotIndex={setParrotIndex}
        parrotList={parrotList}
        parrot ={parrotList[parrotIndex]}
      />
    </>
  )
}

export default App
