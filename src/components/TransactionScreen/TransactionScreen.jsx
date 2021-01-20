import React from "react";
import style from "./TransactionScreen.module.css";
import astronaut from "../../Images/astronaut.svg";
import profileImg from "../../Images/profileImg.svg";
import earthImg from '../../Images/earth.svg';
import idImg from '../../Images/Id.svg';
import PhoneImg from '../../Images/Phone.svg';
import redirectImg from '../../Images/redirect.svg';
import userImg from '../../Images/username.svg';
import webImg from '../../Images/web.svg';
import walletImg from '../../Images/wallet.svg';
import atmImg from '../../Images/atmImg.svg';


const TransactionScreen = (props) => {
  const { transObj } = props;

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  console.log(transObj);
  return isEmpty(transObj) ? (
    <section className={style.container}>
      <p>Click on a Profile to view more details about the transaction.</p>
      <img src={astronaut} />
    </section>
  ) : (
   <section className={style.container}>
       <div className={style.name}>
              <img src={profileImg} />
              <h3>
                {transObj.FirstName} {transObj.LastName}
              </h3>
            </div>
            <div className={style.details}>
              <div>
                <img src={userImg} />
                <small>{transObj.UserName}</small>
              </div>
              <div>
                <img src={idImg} />
                <small>{transObj.Email}</small>
              </div>
              <div>
                <img src={PhoneImg} />
                <small>{transObj.PhoneNumber}</small>
              </div>
              <div>
                  <img src={webImg} />
                  <small>Domain Name: {transObj.DomainName}</small>
              </div>
              <div>
                  <small>CreditCardType: {transObj.CreditCardType}</small>
              </div>
              <div>
                  <small>CreditCardNumber: {transObj.CreditCardNumber}</small>
              </div>
            </div>
            <div className={style.location}>
                <img src={earthImg} />
                <small>{transObj.Longitude}, {transObj.Latitude}</small>
                <span>{transObj.Gender}</span>
            </div>
            <div className={style.cardDetails}>
                <div>
                    <img src={walletImg} />
                    <p>Card details</p>
                </div>
                <img className={style.atmImg} src={atmImg} />
            </div>
   </section>
  );
};

export default TransactionScreen;
