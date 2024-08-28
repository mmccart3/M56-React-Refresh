import { useState} from 'react';


const Register = () => {
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

    return(
    <div>
    <hr></hr>
    <h1>Register User</h1>
    <form onSubmit={submitHandler}>
      <label>User Id</label><br></br>
      <input type='text'name='userid' onChange={(event) =>{setUserid(event.target.value)} }/><br></br><br></br>
      <label>Email</label><br></br>
      <input type='text'name='email' onChange={(event) =>{setEmail(event.target.value)}}/><br></br><br></br>
      <label>Password</label><br></br>
      <input type='text'name='password' onChange={(event) =>{setPassword(event.target.value)}}/><br></br><br></br>
      <input type='submit' value="Submit"></input>
    </form>
    <hr></hr>
  </div>
)}

export default Register