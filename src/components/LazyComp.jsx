import React,{useEffect,useState} from 'react';

export default ()=>{
    const [ name, setName ] = useState('Loading Component Name')

    useEffect(()=>{
            const p = new Promise((res)=>{
                setTimeout(()=>{
                    res('My new Component')
                },5000)
            });
            p.then((val)=>{ setName(val)} )
    },[])
    return (<div>
        {name}
    </div>)
}