import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const calculateFatorial = (n) => {
    if(n < 0) return -1;
    else if(n === 0) return 1;
    else return calculateFatorial(n - 1) * n;
}
const checkNumero = (n) => {
    if(n % 2 === 0) return 'par';
    return 'impar';
}
const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [numero, setNumero] = useState(1);
    const [tipoNumero, setTipoNumero] = useState('par');
    useEffect(()=>{
        setFatorial(calculateFatorial(number));
    },[number])
    
    useEffect(()=>{
        setTipoNumero(checkNumero(numero));
    },[numero])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <span>Fatorial: {fatorial}</span>
            <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
            <SectionTitle title="Exercicio 02"></SectionTitle>

            <span>Tipo numero: {tipoNumero}</span>
            <input type="number" className="input" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
    )
}

export default UseEffect
