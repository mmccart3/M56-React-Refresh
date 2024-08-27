import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // Normal JavaScript goes here
  const [toggle,setToggle] = useState(true);
  const [imageArray, setImageArray] = useState([]);
  const [userid,setUserid] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  //SUBMITHANDLER
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(userid,email, password);
    const response = await fetch(
      "http://localhost:5001/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          username: userid,
          email:email,
          password: password
        })
      }
    );
    const output = await response.json();
    console.log(response);
    console.log(output);
  }

  //FETCH
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImageArray(data);
  }
  useEffect(() => {getImages()},[])
  return (
    <div className="App">
    <div>
      <form onSubmit={submitHandler}>
        <label>User Id</label><br></br>
        <input type='text'name='userid' onChange={(event) =>{setUserid(event.target.value)} }/><br></br><br></br>
        <label>Email</label><br></br>
        <input type='text'name='email' onChange={(event) =>{setEmail(event.target.value)}}/><br></br><br></br>
        <label>Password</label><br></br>
        <input type='text'name='password' onChange={(event) =>{setPassword(event.target.value)}}/><br></br><br></br>
        <input type='submit' value="Submit"></input>
      </form>
    </div>
      <h1>List</h1>
      <button onClick={(event) => {setToggle(!toggle);console.log(toggle)}}>Press me</button>
      <br></br>
      {imageArray.map( (item, index) => { 
        return(
          <div>
              {toggle && <div> 
              <img src={item.download_url} width={"50%"}/>
              <h2>{item.author}</h2>
              </div>}
          </div>
        )
      })}
    </div>
  );
}

export default App;
