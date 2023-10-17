import "./NavBar.css"

function NavBar({parrotIndex, setParrotIndex, parrotList, parrot}) {
    

    let audio = new Audio(parrot.sing)

    const start = () => {
        audio.play();
    }
    
    const previousClick = () => {
        setParrotIndex(parrotIndex -1)
    }

    const nextClick = () => {
        setParrotIndex(parrotIndex +1)
    }

    return ( 
        <>
        <div className="box">
        <button className={parrotIndex === 0 ? "btn hidden" : "btn previous"} disabled={parrotIndex === 0} onClick={previousClick}>Previous</button>
        <button className="btn song" onClick={start}>🎵</button>
        <button className={parrotIndex === parrotList.length -1 ? "btn hidden" : "btn next"} disabled={parrotIndex === parrotList.length -1} onClick={nextClick}>Next</button>
        </div>
        </>
     );
}

export default NavBar;