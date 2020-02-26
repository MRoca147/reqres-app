import React, { Fragment } from 'react';
import '../components/styles/user.css';
import Title from '../components/Title';
import ListUsers from '../components/ListUsers';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';

const User = ({data, form, onChange, onSubmit, onUpdate}) => (
    <Fragment>
        <div className="row">
            <div className="col-md-4">
                <Link to="/resources">
                    <button className="linkBtn">RESOURCES</button>
                </Link>
            </div>
            <div className="col-md-4">
                <Title title="Users"/>
            </div>
            <div className="col-md-4 sesion-btn">
                <Link to="/login">
                    <button className="linkBtn">CERRAR SESION</button>
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <UserForm 
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                onUpdate={onUpdate}/>
            </div>
            <div className="col-md-6">
                <ListUsers users={data}/>
            </div>
        </div>
    </Fragment>
)

export default User