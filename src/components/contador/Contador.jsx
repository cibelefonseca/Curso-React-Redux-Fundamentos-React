import './Contador.css'
import React from 'react'

class Contador extends React.Component {
    /* constructor(props){
        super(props)
        this.state = {
            numero: props.numeroInicial
        }
    } */
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    // Usando uma função arrow para poder usar this.inc
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: 
                        <input type="number" name="" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                    </label>
                </div>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
                
            </div>
        )
    }
}

export default Contador