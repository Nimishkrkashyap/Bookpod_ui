import React from 'react'
import cardStyle from './Card.module.css'

const Card = ({Imgsrc, Title}) => {
    return (
        <>
            <div className={cardStyle.container}>
                <img src={Imgsrc} alt={Title} className={cardStyle.image}/>
                <h1 className={cardStyle.title}>{Title}</h1>
            </div>
        </>
    )
}

export default Card
