import { useState } from 'react';
import readcookie from '../utils/readcookie';

const ListUsers = () => {
    const [userList,setUserList]= useState([])
    const [listOn,setListOn] = useState(false)
    //CLICKHANDLER

    const clickHandler2 = async (event) => {
        setListOn(false);
    }
  const clickHandler = async (event) => {
    let token = readcookie("jwt_token");
    console.log(token);
    
    let reply = "Bearer "+token;
    const response = await fetch(
      "http://localhost:5001/users/listUser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": reply
        }
      }
    );
    const output = await response.json();
    console.log(output.userlist);
    setUserList(output.userlist);
    setListOn(true);
    }

    return(
    <div>
    <hr></hr>
    <h1>List Users</h1>
    <button onClick={clickHandler}>List Users</button>
    <button onClick={clickHandler2}>Switch off List</button>
    <hr></hr>
    <div>
        <h1>List of Users</h1>
        {userList.map((item, index) => {
            return(
            <>
            {listOn && <>
            <h2>User ID = {item.username}</h2>
            <h2>Email = {item.email}</h2>
            </>
        }
            </>)
        })}
    </div>
    <hr></hr>
  </div>
)}

export default ListUsers;