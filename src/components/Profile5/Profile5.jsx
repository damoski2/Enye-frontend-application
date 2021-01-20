import React,{useState, useEffect} from 'react';
import style from './Profile5.module.css';
import { transactProfile5 } from "../../API";
import profileImg from "../../Images/profileImg.svg";
import earthImg from '../../Images/earth.svg';
import idImg from '../../Images/Id.svg';
import PhoneImg from '../../Images/Phone.svg';
import redirectImg from '../../Images/redirect.svg';
import userImg from '../../Images/username.svg';
import webImg from '../../Images/web.svg';

const Profile5 = (props) => {
    const {searchInput,ref5,setTransObj} =props;
    const [profile, setProfiles] = useState([]);

  var prfArr = [];

  const retrieve = async () => {
    setProfiles(await transactProfile5());
  };

  useEffect(() => {
    retrieve();
  }, []);
  /*for(let i=0; i<10; i++){

        if(i>1 &&  i%2===0){
            prfArr.push([profile[i-2],profile[i-1]]);   
        }
       
    }*/
  console.log(profile);


  return (
    <section ref={ref5} className={style.container}>
      {profile.map((item, index) => (
        <section className={style.cardCnt}>
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
  );
}

export default Profile5
