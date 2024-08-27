import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // Normal JavaScript goes here
  const [toggle,setToggle] = useState(true);
  const [imageArray, setImageArray] = useState([]);

  //FETCH
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImageArray(data);
  }
  useEffect(() => {getImages()},[])
  return (
    <div className="App">
      <h1>List</h1>
      {imageArray.map( (item, index) => { 
        return(
          <div>
              {/* <button onClick={(event) => {setToggle(false)}}/> */}
              <img src={item.download_url} width={"50%"}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
