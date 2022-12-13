import React from 'react'

const Psycho = (props) => {
    return (
    <div>
      <div className="therapies-bloc-info" style={{ backgroundColor: props.color }}>
        <div>
          <h4 className="therapie-titre">{props.therapie}</h4>
        </div>
        <div className="therapie-picture">
        <img src={props.picture} alt={props.alt} />
        </div>
        <ul>
        <li>{props.trouble1}</li>
        <li>{props.trouble2}</li>
        <li>{props.trouble3}</li>
        <li>{props.trouble4}</li>
        <li>{props.trouble5}</li>
        <li>{props.trouble6}</li>
        <li>{props.trouble7}</li>
        <li>{props.trouble8}</li>
        <li>{props.trouble9}</li>
        <li>{props.trouble10}</li>
        <li>{props.trouble11}</li>
        <li>{props.trouble12}</li>
        </ul>
      </div>
    </div>
    )
}

export default Psycho
