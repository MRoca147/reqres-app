import React, {useState} from 'react';
import Resources from '../pages/Resources'
import url from '../config'
import useList from './hooks/useList'

const ResourcesContainer = () =>{
    const {data} = useList(`${url}/unknown`)

    const [form,setForm] = useState({
        name:'',
        year:'',
        color:'',
        pantone:''
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
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            let res = await fetch(`${url}/unknown`, config)
            let js = res.json()
            alert('Resource created')
            console.log(js)
        }catch(error){
            alert('Un error a ocurrido')
        }

    }

    const handleUpdate = async e =>{
        e.preventDefault()
        try{
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            let res = await fetch(`${url}/users/2`, config)
            let js = res.json()
            alert('Usuario actualizado con exito')
            console.log(js)
        }catch(error){
            alert('Un error a ocurrido')
        }

    }

    return <Resources data={data}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onUpdate={handleUpdate}
        />
}

export default ResourcesContainer