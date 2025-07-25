import type { Movie } from "../models/MovieModel"
import "../css/MovieCard.css"

function MovieCard(props: {movie: Movie}) {
    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://images.tmdb.org/t/p/w500${props.movie.file_path}`} alt={props.movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>&hearts;</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{props.movie.title}</h3>
            <p>{props.movie.release_date?.split("-")[0]}</p>
        </div>
    </div>

}

export default MovieCard