import React, { useState, useEffect } from 'react';
import ListView from '../ListView/ListView';
import SelectedArticle from '../SelectedArticle/SelectedArticle';
import '../App/App.css';
import { Route, Switch } from 'react-router-dom';
import getAllArticles from '../../ApiCalls';

const App = () => {
  const [appState, setAppState] = useState([])
  const [selectedArticleState, setSelectedArticleState] = useState([])


   
  useEffect(() => {
    getAllArticles("arts")
      .then(data => setAppState(data.results))
  }, []);

  const displaySelectedArticle = (title) => {
    const selectedArticle = appState.find((article) => article.title === title);
    setSelectedArticleState(selectedArticle)

  }

  const displayDropDownArticle = (title) => {
    getAllArticles(title)
      .then(data => setAppState(data.results))
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <ListView appState={appState} displaySelectedArticle={displaySelectedArticle} displayDropDownArticle={displayDropDownArticle}/>} />
        <Route exact path="/selectedArticle" render={() => <SelectedArticle selectedArticleState={selectedArticleState} />} />
      </Switch>
    </div>
  );
}

export default App;
