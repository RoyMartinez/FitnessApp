import React from 'react'
import CardList from '../components/CardList'
import Welcome from '../components/Welcome'
import Add from '../components/Add'

const Exercises = ({  data }) => (
    <>
        <Welcome />
        <Add />
        <CardList exercises={data} />
    </>
)

export default Exercises