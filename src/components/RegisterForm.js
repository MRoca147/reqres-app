import React from 'react';
import '../components/styles/RegisterForm.css';
import { Link } from 'react-router-dom';

const RegisterForm = ({form, onChange, onSubmit}) =>(
    <div className="container">
        <div className="row">
        <div className="col-md-3"/>
        <div className="col-md-6">
        <div className="">
            <Link to="/login">
                <button className="link">Back to Login</button>
            </Link>
        </div>
            <form onSubmit={onSubmit} className="formregister">
                <div className="tittle">
                <h4>Register</h4>
                </div>
                    <div className="form-group">
                            <h5>Email</h5>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="email" 
                                name="email"
                                onChange={onChange}
                                value={form.email}
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
                        />
                    </div>
                    <div className="form-group btna">
                    <button 
                    className="btn btn-primary buttonb"
                    type='submit'
                    >
                        Register
                    </button>
                    </div>
            </form>
        </div>
        <div className="col-md-3"/>
        </div>
    </div>
)

export default RegisterForm