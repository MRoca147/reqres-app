import React, {Fragment} from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = ({form,onChange,onSubmit}) => (
    <Fragment>
        <RegisterForm 
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    </Fragment>
)

export default Register