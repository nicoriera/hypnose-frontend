import React, { memo } from 'react'

const Pourquoi = memo(({ picture, alt, text }) => {
    return (
        <div className="accueil-pourquoi-bloc">
            <img 
                src={picture} 
                alt={alt}
                loading="lazy"
                decoding="async"
                width="250"
                height="200"
            />
            <p className="accueil-pourquoi-bloc-p">{text}</p>
        </div>
    )
})

Pourquoi.displayName = 'Pourquoi';

export default Pourquoi
