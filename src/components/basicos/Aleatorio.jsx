import React from 'react'

export default (props) => {
    // Destructuring operator
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min) + props.min)
    return (
        <>
            <h2>Número Aleatório</h2>
            <p>{aleatorio}</p>
        </>
    )
}