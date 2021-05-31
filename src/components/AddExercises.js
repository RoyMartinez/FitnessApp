import React from 'react'
import './Styles/AddExercises.css'

const AddExercise = ({ onChange, onSubmit, form }) => (
    <div className="Container col-md-6 col-md-offset-3">
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="img"
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="form-group form-row">
                <div className="col">
                    <input
                        type="color"
                        className="form-control"
                        placeholder="leftColor"
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input
                        type="color"
                        className="form-control"
                        placeholder="rightColor"
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">
                    Add Exercise
                </button>
            </div>
        </form>
    </div>
)


export default AddExercise