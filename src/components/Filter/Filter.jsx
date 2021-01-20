import React,{useState, useEffect} from 'react';
import style from './Filter.module.css';
import {genderFilter} from '../../API';
import { paymentFilter } from '../../API';

const Filter = (props) => {
    const {Fdrop,Filter_Inp,FiltInp} = props;

    const [gen,setGen] = useState([]);
    const [pay,setPay] = useState([]);

    useEffect(()=>{
        setGen(genderFilter());
        setPay(paymentFilter());
    },[])
    console.log(gen)

    const keyUp =()=>{
        FiltInp();
        console.log('h')
    }

    

    return (
        <section className={style.filter}>
            <div className={style.gender}>
                <p>Filter By Gender:</p>
                <select value={Fdrop} onChange={Filter_Inp} onKeyUp={keyUp} >
                    <option>Select below</option>
                    {gen.map((item,index)=>(
                        <option key={index} value={item} >{item}</option>
                    ))}
                </select>
            </div>
            <div className={style.payment}>
                <p>Filter By Payment Method:</p>
                <select value={Fdrop} onChange={Filter_Inp} onKeyUp={keyUp} >
                    <option>Select below</option>
                    {pay.map((item,index)=>(
                        <option key={index} value={item} >{item}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default Filter
