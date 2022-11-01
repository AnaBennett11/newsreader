import React, { useState, useEffect} from 'react';
import ListView from '../ListView/ListView';
import SelectedArticle from '../SelectedArticle/SelectedArticle';
import '../App/App.css';
import { Route } from 'react-router-dom';

const App = () => {
  const [appState, setAppState] = useState([])
  const [selectedArticleState, setSelectedArticleState] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OGdrXkTilLXjkwGRAzt8mHxh2z48bmb3')
      .then(response => response.json())
      .then(data => setAppState(data.results))
      
      
  }, []);

 const displaySelectedArticle = (title) => {
   const selectedArticle = appState.find((article) => article.title === title);
   setSelectedArticleState(selectedArticle)
   console.log("clicked")
 }



  return (
    <div className="App">
      <Route exact path="/" render={() => <ListView articleDetails={appState} displaySelectedArticle={displaySelectedArticle}/>}/>
      <Route exact path="/selectedArticle" render={() => <SelectedArticle selectedArticleState={selectedArticleState}/>}/>
    </div>
  );
}

export default App;
