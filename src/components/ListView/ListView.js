import React from 'react';
import './ListView.css';

const ListView = ({articleDetails }) => {
    let sortedArticles = articleDetails.sort((a, b) => 
        (a.section > b.section) ? 1 : ((b.section > a.section) ? -1 : 0))

    const mappedArticles = sortedArticles.map(article =>{
        return (
        <div key={article.title}>
          <h3>{article.title}</h3> {/* have an onclick, save that article title to a state, use router 5 to navigate to another page , then a filter of some kind to find that article or a find within that api and direct it to that story then load the rest of the story */}
         <p>{article.abstract}</p>
        </div>
        )
}) 


 return (
    <div>
        <h1>List of Articles with their Abstracts</h1>
        <section>{mappedArticles}</section>

    </div>
 )
}

export default ListView;