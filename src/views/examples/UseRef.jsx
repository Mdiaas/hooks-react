import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const MergeString = (str1, str2) => {
    return [...str1].map((e, i)=>{
        return `${e}${str2[i] || ""}`;
    }).join("");
}
const UseRef = (props) => {
    const [value,setValue] = useState('');
    const [value1,setValue1] = useState('');
    const [value2,setValue2] = useState('');
    const count = useRef(0);

    const myInput1 = useRef(null);
    const myInput2 = useRef(null);
    useEffect(() => {
        count.current = count.current + 1;    
    },[value])
    
    useEffect(() => {
        myInput2.current.focus();    
    },[value1])
    
    useEffect(() => {
        myInput1.current.focus();    
    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="exercicio 1"></SectionTitle>
            <span className='text'>Contador: {count.current}</span>
            <span className='text'>Valor: {value}</span>
            <input type="text" className="input" value={value} onChange={(e)=> setValue(e.target.value)}/>

            <SectionTitle title="exercicio #02"></SectionTitle>
            <span className='text'>{MergeString(value1, value2)}</span>
            <input ref={myInput1} type="text" className="input" value={value1} onChange={(e)=> setValue1(e.target.value)}/>
            <input ref={myInput2} type="text" className="input" value={value2} onChange={(e)=> setValue2(e.target.value)}/>
        </div>
    )
}

export default UseRef
