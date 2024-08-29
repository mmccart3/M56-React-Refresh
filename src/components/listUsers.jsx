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
    console.log(response.status);
    const output = await response.json();
    console.log(output);
    if (response.status === 500) {
        console.log("not loaded");
        setUserList([]);
        setListOn(false);
        // return user to login screen or prompt user to logon
    } else {
        console.log(response.status)
        setUserList(output.userlist);
        setListOn(true);
    }}

    return(
    <div>
    <hr></hr>
    <h1>List Users</h1>
    <button onClick={clickHandler}>List Users</button>
    <button onClick={clickHandler2}>Switch off List</button>
    <hr></hr>
    <div>
      {listOn ? <>
    
        <h1>List of Users</h1>
        {userList.map((item, index) => {
            return(
            <>
            <h2>User ID = {item.username}</h2>
            <h2>Email = {item.email}</h2>
            </> )})}
        </>
        :     
        <>
        <h1>Please Login again</h1>
        </>
}
          
        
    </div>
    <hr></hr>
  </div>
)}

export default ListUsers;