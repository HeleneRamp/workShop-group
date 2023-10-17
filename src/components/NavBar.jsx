import "./NavBar.css"
import PropTypes from 'prop-types'

function NavBar({ parrotIndex, setParrotIndex, parrotList, parrot }) {


    let audio = new Audio(parrot.sing)

    const start = () => {
        audio.play();
    }

    const previousClick = () => {
        setParrotIndex(parrotIndex - 1)
    }

    const nextClick = () => {
        setParrotIndex(parrotIndex + 1)
    }

    return (
        <>
            <div className="box">
                <button className={parrotIndex === 0 ? "btn hidden" : "btn previous"} disabled={parrotIndex === 0} onClick={previousClick}>Previous</button>
                <button className="btn song" onClick={start}>🎵</button>
                <button className={parrotIndex === parrotList.length - 1 ? "btn hidden" : "btn next"} disabled={parrotIndex === parrotList.length - 1} onClick={nextClick}>Next</button>
            </div>
        </>
    );
}

NavBar.propTypes = {
    parrot: PropTypes.shape({
        sing: PropTypes.string.isRequired,
    }).isRequired
}

export default NavBar;