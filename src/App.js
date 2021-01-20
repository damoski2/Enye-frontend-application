import react,{ useEffect, useState } from 'react';
import './App.css';
import {transactProfile} from './API';
import { NavBar, Heading, Profile, Profile2, TransactionScreen, Pagination, Profile3, Profile4, Profile5, Profile6, Filter } from './components/imports';

function App() {
const [pagination,setPagination] = useState(1);
const [transObj, setTransObj] = useState({});
const ref1 = react.useRef();
const ref2 = react.useRef();
const ref3 = react.useRef();
const ref4 = react.useRef();
const ref5 = react.useRef();
const ref6 = react.useRef();


const Fref1 = react.useRef();
const Fref2 = react.useRef();

const [inputs,setInputs]= useState('');
const [Fdrop, setFDrop] = useState('');

  
//const [searchInput, setSearchInput] = useState('');

const Filter_Inp = (e)=>{
  setFDrop(e.target.value);
  console.log(Fdrop);
}

const FiltInp = (e)=>{
  var filter = Fdrop.toUpperCase();
  var ul = ref1.current;
  var gender = ul.getElementsByTagName('span')
  var sect = ul.getElementsByTagName('section');

  for(let i=0; i<gender.length; i++){
    var a = gender[i];
    let textValue = a.textContent || a.innerText;
    if(textValue.toUpperCase().indexOf(filter) > -1){
        gender[i].style.display ="";
        sect[i].style.display ="";
    }else{
        gender[i].style.display = "none";
        sect[i].style.display = "none";
    }
}
}

const Search_Inp = (e)=>{
    setInputs(e.target.value);
    console.log(inputs);
}

const findInp = (e)=>{
  var filter = inputs.toUpperCase();
  var ul = ref1.current;
  var name = ul.getElementsByTagName('h3')
  var sect = ul.getElementsByTagName('section');
  //console.log(li);

  for(let i=0; i<name.length; i++){
      var a = name[i];
      let textValue = a.textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          name[i].style.display ="";
          sect[i].style.display ="";
      }else{
          name[i].style.display = "none";
          sect[i].style.display = "none";
      }
  }
}

const findInp2 = (e)=>{
  var filter = inputs.toUpperCase();
  var ul = ref2.current;
  var name = ul.getElementsByTagName('h3')
  var sect = ul.getElementsByTagName('section');
  //console.log(li);

  for(let i=0; i<name.length; i++){
      var a = name[i];
      let textValue = a.textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          name[i].style.display ="";
          sect[i].style.display ="";
      }else{
          name[i].style.display = "none";
          sect[i].style.display = "none";
      }
  }
}

const findInp3 = (e)=>{
  var filter = inputs.toUpperCase();
  var ul = ref3.current;
  var name = ul.getElementsByTagName('h3')
  var sect = ul.getElementsByTagName('section');
  //console.log(li);

  for(let i=0; i<name.length; i++){
      var a = name[i];
      let textValue = a.textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          name[i].style.display ="";
          sect[i].style.display ="";
      }else{
          name[i].style.display = "none";
          sect[i].style.display = "none";
      }
  }
}

const findInp4 = (e)=>{
  var filter = inputs.toUpperCase();
  var ul = ref4.current;
  var name = ul.getElementsByTagName('h3')
  var sect = ul.getElementsByTagName('section');
  //console.log(li);

  for(let i=0; i<name.length; i++){
      var a = name[i];
      let textValue = a.textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          name[i].style.display ="";
          sect[i].style.display ="";
      }else{
          name[i].style.display = "none";
          sect[i].style.display = "none";
      }
  }
}

const findInp5 = (e)=>{
  var filter = inputs.toUpperCase();
  var ul = ref5.current;
  var name = ul.getElementsByTagName('h3')
  var sect = ul.getElementsByTagName('section');
  //console.log(li);

  for(let i=0; i<name.length; i++){
      var a = name[i];
      let textValue = a.textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          name[i].style.display ="";
          sect[i].style.display ="";
      }else{
          name[i].style.display = "none";
          sect[i].style.display = "none";
      }
  }
}

const findInp6 = (e)=>{
  var filter = inputs.toUpperCase();
  var ul = ref6.current;
  var name = ul.getElementsByTagName('h3')
  var sect = ul.getElementsByTagName('section');
  //console.log(li);

  for(let i=0; i<name.length; i++){
      var a = name[i];
      let textValue = a.textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          name[i].style.display ="";
          sect[i].style.display ="";
      }else{
          name[i].style.display = "none";
          sect[i].style.display = "none";
      }
  }
}



  return (
    <div className="App">
      <div className="first-section">
        <NavBar inputs={inputs} Search_Inp={Search_Inp} findInp={findInp} findInp2={findInp2} findInp3={findInp3} findInp4={findInp4} findInp5={findInp5} findInp6={findInp6} />
        <Heading />
        <Filter Fdrop={Fdrop} Filter_Inp={Filter_Inp} FiltInp={FiltInp} />
       <div className="split" style={{display: pagination==1?'flex':'none'}} >
        <Profile inputs={inputs} ref1={ref1} setTransObj={setTransObj} />
        <Profile2 inputs={inputs} ref2={ref2} setTransObj={setTransObj} />
       </div>
       <div className="split2" style={{display: pagination==2?'flex':'none'}} >
        <Profile3 inputs={inputs} ref3={ref3} setTransObj={setTransObj} />
        <Profile4 inputs={inputs} ref4={ref4} setTransObj={setTransObj} />
       </div>
       <div className="split3" style={{display: pagination==3?'flex':'none'}} >
        <Profile5 inputs={inputs} ref5={ref5} setTransObj={setTransObj} />
        <Profile6 inputs={inputs} ref6={ref6} setTransObj={setTransObj} />
       </div>
       <Pagination setPagination={setPagination} pagination={pagination} />
      </div>
      <div className="other-section">
        <TransactionScreen transObj={transObj} />
      </div> 
      
    </div>
  );
}

export default App;
