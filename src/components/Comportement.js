import React from 'react'

const Comportement = (props) => {
    return (
       <div>
      <div className="bloc-info" style={{ backgroundColor: props.color }}>
        <div>
          <h3 className="therapie-titre">{props.therapie}</h3>
        </div>
        <ul>
        <li>{props.trouble1}</li>
        <li>{props.trouble2}</li>
        <li>{props.trouble3}</li>
        <li>{props.trouble4}</li>
        <li>{props.trouble5}</li>
        <li>{props.trouble6}</li>
        <li>{props.trouble7}</li>
        </ul>
      </div>
    </div>
    )
}

export default Comportement
