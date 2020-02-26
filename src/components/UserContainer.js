import React, {useState} from 'react';
import url from '../config'
import useList from './hooks/useList'
import User from '../pages/User';

const UserContainer = () =>{
    const {data} = useList(`${url}/users?page=2`)

    const [form,setForm] = useState({
        email:'',
        name:'',
        avatar:''
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            let names = form.name.split(' ')
            let avatar = form.avatar.split('\\')
            if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email) === false){
                alert('Write a valid email')
            }else if(names.length > 2 || names.length === 1){
                alert('Please write only a name and lastname')
            }else{
                let newForm ={
                    email: form.email,
                    Fname: names[0],
                    Lname: names[1],
                    avatar: avatar[avatar.length-1]
                }
                let config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newForm)
                }
                let res = await fetch(`${url}/users`, config)
                let js = res.json()
                alert('User created')
                console.log(js)
            }
        }catch(error){
            alert('Un error a ocurrido')
        }

    }

    const handleUpdate = async e =>{
        e.preventDefault()
        try{
            let names = form.name.split(' ')
            let avatar = form.avatar.split('\\')
            if(names.length > 2 || names.length === 1){
                alert('Please write only a name and lastname')
            }else{
                let newForm ={
                    email: form.email,
                    Fname: names[0],
                    Lname: names[1],
                    avatar: avatar[avatar.length-1]
                }
                let config = {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newForm)
                }
                let res = await fetch(`${url}/users/2`, config)
                let js = res.json()
                alert('User updated')
                console.log(js)
            }
        }catch(error){
            alert('Un error a ocurrido')
        }

    }

    return <User 
        data={data}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onUpdate={handleUpdate}/>
}

export default UserContainer