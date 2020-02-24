import React from 'react';
import Resources from '../pages/Resources'
import url from '../config'
import useList from './hooks/useList'

const ResourcesContainer = () =>{
    const {data} = useList(`${url}/unknown`)

    return <Resources data={data}/>
}

export default ResourcesContainer