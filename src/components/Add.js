import React from 'react'
import './Styles/Add.css'
import { Link } from 'react-router-dom'


const Add = () => (
    <>
        <Link className="redireccion" to="/new">
            <img 
                className="Add"
                src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
                alt="hay una imagen"
            />
        </Link>
    </>
)

export default Add