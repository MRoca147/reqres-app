import React, {Fragment} from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({form, onChange, onSubmit}) =>(
    <Fragment>
        <LoginForm 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    </Fragment>
)

export default Login