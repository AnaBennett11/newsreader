import React, { useState, useEffect} from 'react';
import ListView from '../ListView/ListView';
import '../App/App.css';

const App = () => {
  const [appState, setAppState] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OGdrXkTilLXjkwGRAzt8mHxh2z48bmb3')
      .then(response => response.json())
      .then(data => setAppState(data.results))
      
      
  }, []);

 
console.log(appState, "appState")


  return (
    <div className="App">
      <ListView articleDetails={appState}/>
    </div>
  );
}

export default App;
//OGdrXkTilLXjkwGRAzt8mHxh2z48bmb3
//https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey



//fetch call to here -->https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OGdrXkTilLXjkwGRAzt8mHxh2z48bmb3