import React, { Fragment } from 'react';
import '../components/styles/resources.css'
import Title from '../components/Title';
import ListResources from '../components/ListResources';
import { Link } from 'react-router-dom';

const Resources = ({data}) => (
    <Fragment>
        <div className="row">
            <div className="col-md-4">
                <Link to="/user">
                    <button className="linkBtn">USER</button>
                </Link>
            </div>
            <div className="col-md-4">
                <Title title="Resources"/>
            </div>
            <div className="col-md-4 sesion-btn">
                <Link to="/login">
                    <button className="linkBtn">CERRAR SESION</button>
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <h1>Form Create & Update resources</h1>
            </div>
            <div className="col-md-6">
                <ListResources resources={data}/>
            </div>
        </div>
    </Fragment>
)

export default Resources