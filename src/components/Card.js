import React from 'react'
import circle from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './Styles/Card.css'

const Text = ({age,description}) => {
    if(age>=1 && age<18){
        return (<p>Status: Newbie, {description}</p>)
    }
    else if (age>=18 && age<25){
        return (<p>Status: Started, {description}</p>)
    }
    else if (age>=25 && age<50){
        return(<p>Status: Fitness, {description}</p>)
    }
    else if (age>=50 && age<80){
        return(<p>Status: Pro, {description}</p>)
    }
    else{
        return(<p>Status: God on the earth, {description}</p>)
    }
}


const Card = ({title,description,img,leftColor,rightColor}) => {

    const [age, setAge] = React.useState(1);
    const changeAge = (_) => setAge(age+1);

    return (
        <div className= "card mx-auto Fitness-Card"
        style={{
            backgroundImage: `url(${circle}), linear-gradient(to right,${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'})`
        }}
        >
            <div className= "card-body">
                <div className="row center">
                    <div className="col-4">
                        <img src={img || emptyImg} alt="Sabes buscar la imagen pero ocurrio algun error" className="float-right ajustada" />
                    </div>
                    <div className="col-8 Fitness-Card-Info">
                        <h1>{age} {title}</h1>
                        <Text age={age} description={description} />
                        <button className="btn btn-primary" onClick={changeAge}>Add one</button>
                    </div>
                </div>
            </div>
        </div>
    )       
}

export default Card