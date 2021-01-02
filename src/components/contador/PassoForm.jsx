import React from 'react'

export default props => {
    return (
        <div>
            <div>
                <label htmlFor="passoInput">Passo:
                        <input type="number" name="" id="passoInput" value={props.passo} onChange={e => props.setPasso(+e.target.value)} />
                </label>
            </div>
        </div>
    )
}