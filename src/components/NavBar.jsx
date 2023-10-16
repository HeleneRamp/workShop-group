import "./NavBar.css"

function NavBar({parrotIndex, setParrotIndex, parrotList}) {
    
    const previousClick = () => {
        setParrotIndex(parrotIndex -1)
    }

    const nextClick = () => {
        setParrotIndex(parrotIndex +1)
    }

    return ( 
        <>
        <div>
        <button className={parrotIndex === 0 ? "hidden" : "btn previous"} onClick={previousClick}>Previous</button>
        <button className={parrotIndex === parrotList.length -1 ? "hidden" : "btn next"} onClick={nextClick}>Next</button>
        </div>
        </>
     );
}

export default NavBar;