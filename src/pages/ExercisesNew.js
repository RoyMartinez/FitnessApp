import React from 'react'
import Card from '../components/Card'
import AddExercises from '../components/AddExercises'

const ExercisesNew = ({form,onChange,onSubmit}) => {
    return(
        <div className="  row">
            <div className="col-sm">
                <Card { ...form } /> 
            </div>
            <div className="col-sm">
                <AddExercises 
                    onChange = { onChange }
                    onSubmit = { onSubmit }
                    form = { form }
                />
            </div>
        </div>
    )
}

export default ExercisesNew