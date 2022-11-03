const getAllArticles = (section) => {
    return (
        fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=OGdrXkTilLXjkwGRAzt8mHxh2z48bmb3`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).catch(error => console.log(error))
    )
}

export default getAllArticles;