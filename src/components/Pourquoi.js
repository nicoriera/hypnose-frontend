import React from 'react'

const Pourquoi = (props) => {
    return (
        <div className="accueil-pourquoi-bloc">
            <img src={props.picture} alt={props.alt}/>
            <p>{props.text}</p>
        </div>
    )
}

export default Pourquoi
