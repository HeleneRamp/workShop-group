function NavBar({parrotIndex, setParrotIndex, parrotList}) {
    
    const previousClick = () => {
        setParrotIndex(parrotIndex -1)
    }

    const nextClick = () => {
        setParrotIndex(parrotIndex +1)
    }

    return ( 
        <>
        <button onClick={previousClick} disabled={parrotIndex === 0}>Previous</button>
        <button onClick={nextClick} disabled={parrotIndex === parrotList.length -1}>Next</button>
        </>
     );
}

export default NavBar;