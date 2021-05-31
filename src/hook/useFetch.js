import React from 'react'

const useFetch = url => {

    const [data, setData] = React.useState([])

    const [loading, setLoading] = React.useState(true)
    
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource();
    }, [url])

    return { data, loading, error }
}

export default useFetch