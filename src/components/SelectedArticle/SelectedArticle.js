import React from 'react';
import './SelectedArticle.css'

const SelectedArticle = ({selectedArticleState}) => {
    console.log(selectedArticleState);
    return (
        <div>
            <h1>{selectedArticleState.title}</h1>
            <p>{selectedArticleState.abstract}</p>
            <img src={selectedArticleState.multimedia[1].url} alt={selectedArticleState.title} />
            <p>{selectedArticleState.byline}</p>
            <p>{selectedArticleState.created_date}</p>
            <a className="website-anchor" target="_blank" rel="noreferrer" href={selectedArticleState.url}>
                Click Here to see this article on the NY Times Website
            </a>
        </div>
    )
}

export default SelectedArticle;