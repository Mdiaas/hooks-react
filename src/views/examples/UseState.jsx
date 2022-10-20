import React from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <span className='text'>{counter}</span>
                <div className="">
                    <button className="btn" onClick={() => setCounter(counter-1)}>-1</button>    
                    <button className="btn" onClick={() => setCounter(counter+1)}>+1</button>    
                </div>
            </div>
            <SectionTitle title="Exercicio #02"></SectionTitle>
            <input type="text" className='input' value={name} onChange={(e) => setName(e.target.value)}/>
            <span className="">{name}</span>
        </div>
    )
}

export default UseState
