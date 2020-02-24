import React from 'react';
import User from '../pages/User'
import url from '../config'
import useList from './hooks/useList'

const UserContainer = () =>{
    const {data} = useList(`${url}/users?page=2`)

    return <User data={data}/>
}

export default UserContainer