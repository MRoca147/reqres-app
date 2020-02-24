import React from 'react';
import loginProfile from '../images/LoginProfile.svg';
import '../components/styles/LoginForm.css'
import { Link } from 'react-router-dom';

const LoginForm = ({form,onChange, onSubmit}) =>(
    <div className="container">
        <div className="row">
        <div className="col-md-3"/>
        <div className="col-md-6 formlogin">
            <div>
            <img className="image mx-auto d-block" src={loginProfile} alt="LoginProfile" />
            </div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h5>Email</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email"
                        onChange={onChange}
                        value={form.email}
                        //required
                    />
                </div>
                <div className="form-group">
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password"
                        onChange={onChange}
                        value={form.password}
                        //required
                    />
                </div>
                <div className="form-group btna">
                    <button 
                    className="btn btn-primary buttonb"
                    type="submit">
                        Login
                    </button>
                </div>
                <div className="link">
                <Link to="/register">
                    <button className="linkBtn">Create new account</button>
                </Link>
                </div>
            </form>
        </div>
        <div className="col-md-3"/>
        </div>
    </div>
)

export default LoginForm