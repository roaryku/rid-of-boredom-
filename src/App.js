import { useState, useEffect } from 'react';
import video from './tips.mp4'
import './App.css';

function App() {
 
  const [tips, setTips] = useState("");

  useEffect(() => {
    fetchTips()
  }, [])

  const fetchTips = async() => {
    const responce = await fetch("https://www.boredapi.com/api/activity/");
    const data = await responce.json();
    setTips(data.activity)
  }

  return (
  <div>
    <div className="App">
    <h1>Are You Bored 🙄 ?</h1>
    <h3>Here are some tips how to get rid of boredom</h3>
    <video autoPlay muted loop>
            <source src={video} type='video/mp4'/>
          </video>
    <p>{tips}</p>
    <button onClick={fetchTips}>New Tip</button>
     </div>
   </div>
  );
}

export default App;
