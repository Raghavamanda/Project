import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [color,setColor]= useState("red");
  const [count,setCouner]= useState(0);
  const [info, setInfo] = useState({
    firstName: "swap",
    lastName: "max",
    age: 24
  });
  const [firstName,setFirstName]= useState("Raghava");
const [arr, setArray] = useState([1, 4, 15, 17, 3, 5, 7]);
  const [users, setUsers] = useState([]);
  const incCounter= ()=> {
    console.log("gssdf");
    setCouner((count) => count+1)
  }
  const decCounter= ()=> {
    console.log("bullet raghava");
    setCouner((count) => count-1);
  }
  const cname= (event) => {
    let fname= event.target.value;
    setFirstName(fname);
   
    
};
const getUsers= ()=>{
  fetch("https://dummyjson.com/users")
  .then((res)=> (res.json()))
  .then((res)=> {
    console.log(res);
    setUsers(res.users);
  });
}

  return (
    <div className="App">
    {/* <h1>Color is: {color}</h1>
     <button onClick={()=>setColor("black")}>Change Color</button>
     <h1>Count is: bullet raghava the {count}</h1>
     <button onClick={incCounter}>Inc Counter +</button>
  <button onClick={decCounter}>Dec Counter +</button> */}
     <button onClick={getUsers}>getUsers</button>
     <input type="text" name="firstName"  value={firstName} onChange={cname}/>
     <h1>firstName : {firstName} </h1>

     {/* <h1>name {info.firstName}</h1>
     <h1>lname{info.lastName}</h1>
     <h2>age{info.age}</h2> */}
   <ul>
        {/* Print array using Map */}
        {/*
          arr.map((a) =>
            // console.log(a)
            <li key={a}>{a}</li>
          )
    */}
      </ul>
      <ul>
        {/* Print array using Map */}
        {
          users.map((product) =>
          <li key={users.maidenName}>{users.maidenName}</li>
          //console.log(title)
          )
        }
        </ul>
        <ul>
        {/* Print array using Map */}
        {
          users.map((product) =>
          <li key={product.macAddress}>{product.macAddress}</li>
          //console.log(title)
          )
        }
        </ul>
        <ul>
        {
          users.map((product) =>
          <li key={product.birthDate}>{product.birthDate}</li>
          //console.log(title)
          )
        }
         <ul>
        {/* Print array using Map */}
        {
          users.map((product) =>
          <div>
              <li key={product.image}>{product.image}</li>
            <img src={users.image[0]} className="logo" alt="Vite logo" />
          </div>
        
          //console.log(title)
          
          )
        }
        </ul>
        {/* <img src={"https://cdn.dummyjson.com/product-images/1/1.jpg"} className="logo" alt="Vite logo" /> */}
      </ul>
    </div>
  );
}
export default App;