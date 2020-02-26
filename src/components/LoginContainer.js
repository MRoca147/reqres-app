import React, { useState } from 'react';
import Login from '../pages/Login'
import url from '../config';

const LoginContainer = ({history}) =>{
    const [form,setForm] = useState({
        email:'',
        password:''
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email) === false){
                alert('Write a valid email')
            }else{
                let config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                }
                let res = await fetch(`${url}/login`, config)
                let js = res.json()
                let value = await js.valueOf(js)
                let token = value.token
                if(res.status === 200){
                    console.log(token)
                    if(localStorage.getItem('token') === token){
                        history.push('/user')
                    }
                }else{
                    alert('Usuario o contraseña incorrecto')
                }
            }
        }catch(error){
            alert('Un error a ocurrido')
        }

    }

    return <Login 
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
}

export default LoginContainer