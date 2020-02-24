import { useState, useEffect } from 'react'

const useList = (url) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                console.log(data.data)
                setData(data.data)
            } catch (error) {
            }
        }
        fetchUsers()
    }, [url])

    return { data }
}


export default useList