import React from 'react';
import './styles/CardResources.css'

const CardResources = ({ name, year, color, pantone_value }) => (
    
    <div className="card Resources-Card">
        <div className="card-body">
            <div className="row center">
                <div className="Resources-Card-Info">
                    <h5>{name}</h5>
                    <h5>{year}</h5>
                    <h5>{color}</h5>
                    <h5>{pantone_value}</h5>
                </div>
            </div>
        </div>
    </div>
)

export default CardResources