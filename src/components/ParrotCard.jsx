import PropTypes from 'prop-types'
import "./ParrotCard.css"
function ParrotCard({parrotList}) {
    return (  
        <>
            <div className="pic-container">
        <img src={parrotList.imgSrc} className="parrot-pic"/>
            </div>
        <h2 className="title">Hi, I'm {parrotList.name} the {parrotList.species}, and I'm free as a bird !</h2>
        </>
    )
}

ParrotCard.propTypes = {
    parrotList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
    }).isRequired
}

export default ParrotCard;