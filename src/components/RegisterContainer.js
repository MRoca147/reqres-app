import React, {useState} from 'react';
import Register from '../pages/Register'
import url from '../config';

const RegisterContainer = ({history}) =>{
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
                let res = await fetch(`${url}/register`, config)
                let js = res.json()
                let value = await js.valueOf(js)
                let token = value.token
                if(res.status === 200){
                    console.log(token)
                    localStorage.setItem('token', token)
                    history.push('/user')
                }else{
                    alert('Error al registrar')
                }
            }
        }catch(error){
            alert('Un error a ocurrido')
        }

    }

    return <Register 
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
}

export default RegisterContainer