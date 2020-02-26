import React, { Fragment } from 'react';
import '../components/styles/resources.css'
import Title from '../components/Title';
import ListResources from '../components/ListResources';
import ResourcesForm from '../components/ResourcesForm';
import { Link } from 'react-router-dom';

const Resources = ({data, form, onChange, onSubmit, onUpdate}) => (
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
                <ResourcesForm 
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                onUpdate={onUpdate}/>
            </div>
            <div className="col-md-6">
                <ListResources resources={data}/>
            </div>
        </div>
    </Fragment>
)

export default Resources