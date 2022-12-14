import React from 'react';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import './ListView.css';

const ListView = ({ appState, displaySelectedArticle, displayDropDownArticle }) => {
    let sortedArticles = appState.sort((a, b) =>
        (a.section > b.section) ? 1 : ((b.section > a.section) ? -1 : 0))

    const mappedArticles = sortedArticles.map(article => {
        return (
            <div key={article.title} className="container">
                <Link to={"/selectedArticle"} >
                    <ul className='list' onClick={() => displaySelectedArticle(article.title)} value={article.title}>
                        <p>{article.section}</p>
                        <h3>{article.title}</h3> {/* have an onclick, save that article title to a state, use router 5 to navigate to another page , then a filter of some kind to find that article or a find within that api and direct it to that story then load the rest of the story */}
                        <p>{article.abstract}</p>
                        <img src={article.multimedia[0].url} alt={article.title} />
                    </ul>
                </Link>
            </div>
        )
    })


    return (
        <div className='newContainer'>
            <h1>Top Stories sorted by Section</h1>
            <Form displayDropDownArticle={displayDropDownArticle}/>
            <div className='listView'>
                <section>
                    {mappedArticles}
                </section>
            </div>
        </div >
    )
}

export default ListView;