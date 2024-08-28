import readcookie from '../utils/readcookie';

const ListUsers = () => {

    //CLICKHANDLER
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
    console.log(response);
    console.log(output);
    }

    return(
    <div>
    <hr></hr>
    <h1>List Users</h1>
    <button onClick={clickHandler}>List Users</button>
    <hr></hr>
  </div>
)}

export default ListUsers;