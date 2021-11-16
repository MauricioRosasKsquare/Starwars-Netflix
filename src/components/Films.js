
function Films( { films, posters } ) {

    function findPoster(episode){
        let poster = posters.find(poster => poster.episode === episode )
        return poster.url
    }
    return (
        <>
            <div className="row">
                <div className="row_posters">
                    {films.map((film, index) => (
                       <img className="ror_poster" src={ findPoster(film.episode_id )} alt={film.title} key={index} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Films
