import React,{useEffect, useState} from 'react';
import style from './NavBar.module.css';
import SearchIcon from '../../Images/searchIcon.svg';

const NavBar = (props) => {
   const { Search_Inp, searchInput,findInp,findInp2,findInp3,findInp4,findInp5,findInp6} = props

   const keyUp =()=>{
       findInp();
       findInp2();
       findInp3();
       findInp4();
       findInp5();
       findInp6(); 
   }

    return (
        <section className={style.container}>
            <h1 className={style.heading}>E-Records</h1>
            <div className={style.search}>
                <input type="text" placeholder="Search" value={searchInput} onChange={Search_Inp} onKeyUp={keyUp} />
                <input type="submit" value="Find Profile" />
            </div>
        </section>
    )
}

export default NavBar;
