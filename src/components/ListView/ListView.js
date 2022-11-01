import React from 'react';
import './ListView.css';

const ListView = ({ articleDetails }) => {
    let sortedArticles = articleDetails.sort((a, b) =>
        (a.section > b.section) ? 1 : ((b.section > a.section) ? -1 : 0))

    const mappedArticles = sortedArticles.map(article => {
        return (
            <div key={article.title}>
                <ul className='list'>
                   <p>{article.section}</p>
                   <h3>{article.title}</h3> {/* have an onclick, save that article title to a state, use router 5 to navigate to another page , then a filter of some kind to find that article or a find within that api and direct it to that story then load the rest of the story */}
                   <p>{article.abstract}</p>
                   <img src={article.multimedia[1].url} alt={article.title} />
                </ul>
            </div>
        )
    })


    return (
        <div className='listView'>
            <h1>Top Stories sorted by Section</h1>
            <section>
                {mappedArticles}
            </section>
        </div>
    )
}

export default ListView;