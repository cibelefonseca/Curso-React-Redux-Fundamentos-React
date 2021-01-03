import './Mega.css'
import React, { useState } from 'react'

export default props => {
    function gerarNumeros(qnt) {
        var numeros = []
        for (var i = 0; i < qnt; i++) {
            var num = parseInt(Math.random() * (60 - 1)) + 1
            while (numeros.indexOf(num) !== -1) {
                num = parseInt(Math.random() * (60 - 1)) + 1
            }
            numeros.push(num)
        }
        numeros.sort(function(a, b) {return a - b;});
        return numeros.map((numero, i) => {
            return <strong>{numero} </strong>
        })
    }

    let [numeros, setNumeros] = useState('Mega')
    let [quantidade, setQuantidade] = useState(6)

    function quandoMudar(e){
        setQuantidade(e.target.value)
    }

    function sortear(){
        setNumeros(gerarNumeros(quantidade))
    }

    return (
        <div className="Mega">
            <h2>{numeros}</h2>
            <div>
                <label htmlFor="Quantidade">Quantidade: 
                    <input type="number" value={quantidade} onChange={quandoMudar}/>
                </label>
            </div>
            <div>
                <button onClick={sortear}>Sortear</button>
            </div>
        </div>
    )
}