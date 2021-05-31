import React from 'react'
import Card from './Card'

const CardList = ({ exercises }) => (
    <div>
        { exercises.map((excercise) => {
            return (
                <Card
                    key={excercise.id}
                    {...excercise}
                />
            )
        })}
    </div>
)

export default CardList