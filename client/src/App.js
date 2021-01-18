import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [foodName, setFoodName] = useState("");
  
  const addToFood = async (e) => {
    e.preventDefault();
    const test = await Axios.get('http://localhost:5000/',{
      foodName,
    });
    console.log(test);
  };

  return (
    <div className="App">
      <h1>Food CRUD App Using MERN Stack</h1>
      <input 
        type="text" 
        placeholder="Insert Food Name"
        onChange={(e) => {setFoodName(e.target.value)}}
      />
      <button onClick={addToFood}>Add to Food List</button>
    </div>
  );
}

export default App;
