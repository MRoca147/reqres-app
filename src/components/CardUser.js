import React from 'react';
import './styles/CardUser.css'

const CardUser = ({ email, first_name, last_name, avatar }) => (
    
    <div className="card User-Card">
        <div className="card-body">
            <div className="row center">
                <div className="User-Card-Info">
                    <h5>{email}</h5>
                    <h5>{first_name}</h5>
                    <h5>{last_name}</h5>
                    <h5>{avatar}</h5>
                </div>
            </div>
        </div>
    </div>
)

export default CardUser