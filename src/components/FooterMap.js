import React from 'react'

import Map from "../components/Map"

const FooterMap = (props) => {
    return (
        <div className="container-footer">
            <div className="footer-text">
            <h3>Contact</h3>
            <div>Hendaye</div>
            <div>14 boulevard du Général de Gaulle</div>
            <div>64700 HENDAYE</div>
            <div>Tél. 06 xx xx xx xx</div>
            <div>christophebaccou.hypnose@gmail.com</div>
            </div>
            <div>
            <Map />
            </div>
          </div>
    )
}

export default FooterMap
