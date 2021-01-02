import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo='#11 - Componente Controlado' color="#B4B5B5">
                <Input></Input>
            </Card>
            <Card titulo='#10 - Comunicação Indireta' color="#D4B59D">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo='#09 - Comunicação Direta' color="#C7CEEA">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo='#08 - Renderização Condicional' color="#FFDAC1">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'fernando@gmail.com'}}></UsuarioInfo>
            </Card>
            <Card titulo='#07 - Desafio Repetição' color="#998AD3">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo='#06 - Repetição' color="#87DCC0">
                <Familia sobrenome="Ferreira">
                    <ListaAlunos></ListaAlunos>
                </Familia>
            </Card>
            <Card titulo='#05 - Componente com Filhos' color="#FFF49C">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                    <FamiliaMembro nome="Ana" ></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo='#04 - Desafio Aleatório' color="#D291BC">
                <Aleatorio min={1} max={10} />
            </Card>
            <Card titulo='#03 - Fragmento' color="#FEC8D8">
                <Fragmento />
            </Card>
            <Card titulo='#02 - Com Parâmetro' color="#CDF1AF">
                <ComParametro titulo='Situação do Aluno' aluno='Pedro Silva' nota={9.3} />
            </Card>
            <Card titulo='#01 - Primeiro Componente' color="#88BBE4">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)