import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
const calculateFatorial = (n) => {
    if(n < 0) return -1;
    else if(n === 0) return 1;
    else return calculateFatorial(n - 1) * n;
}
const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    useEffect(()=>{
        setFatorial(calculateFatorial(number));
    },[number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <span>Fatorial: {fatorial}</span>
            <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
    )
}

export default UseEffect
