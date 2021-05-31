import React from 'react'
import FatalError from './500'
import Loading from '../components/Loading'
import ExercisesNew from './ExercisesNew'
import url from '../config'


const ExercisesNewContainer = ({history}) => {

    const [form,setForm] = React.useState({
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    })

    const [loading,setLoading] = React.useState(false)

    const [error,setError] = React.useState(null)


    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };


    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            }
            let res = await fetch(`${url}/exercises`, config)
            await res.json()
            setLoading(false)
            history.push('/')
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    };

    if (loading)
        return <Loading/>
    if (error)
        return <FatalError />

    return <ExercisesNew
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
}

export default ExercisesNewContainer