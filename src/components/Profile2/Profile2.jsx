import React,{useEffect, useState} from 'react';
import style from './Profile2.module.css';
import {transactProfile2} from '../../API';
import profileImg from '../../Images/profileImg.svg';
import earthImg from '../../Images/earth.svg';
import idImg from '../../Images/Id.svg';
import PhoneImg from '../../Images/Phone.svg';
import redirectImg from '../../Images/redirect.svg';
import userImg from '../../Images/username.svg';
import webImg from '../../Images/web.svg';

const Profile2 = (props) => {
    const {searchInput,ref2,setTransObj} =props;

    const [profile, setProfiles] = useState([]);

    var prfArr=[];

    
    const retrieve = async()=>{
        setProfiles(await transactProfile2());
    }

    useEffect(()=>{
        retrieve();
    },[]);

    return (
      <section ref={ref2} className={style.container}>
      {profile.map((item, index) => (
        <section  key={index} className={style.cardCnt}>
          <div className={style.surround}>
          <div className={style.card1}>
            <p className={style.lastLogin}>Last Login: {item.LastLogin}</p>
            <div className={style.name}>
              <img src={profileImg} />
              <h3>
                {item.FirstName} {item.LastName}
              </h3>
            </div>
            <div className={style.details}>
              <div>
                <img src={userImg} />
                <small>{item.UserName}</small>
              </div>
              <div>
                <img src={idImg} />
                <small>{item.Email}</small>
              </div>
              <div>
                <img src={PhoneImg} />
                <small>{item.PhoneNumber}</small>
              </div>
              <div>
                  <img src={webImg} />
                  <small>Domain Name: {item.DomainName}</small>
              </div>
            </div>
            <div className={style.location}>
                <img src={earthImg} />
                <small>{item.Longitude}, {item.Latitude}</small>
                <span>{item.Gender}</span>
            </div>
            <div className={style.transaction}>
                <p>View Transaction details</p>
                <img src={redirectImg} onClick={()=>setTransObj(item)} />
            </div>
          </div>
          </div>
        </section>
      ))}
    </section>
    )
}

export default Profile2
