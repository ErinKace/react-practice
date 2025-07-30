import type { Movie, MovieContextType } from "../models/MovieModel"
import "../css/MovieCard.css"
import { MovieContext} from "../contexts/MovieContext"
import { useContext, type SyntheticEvent } from "react"

function MovieCard(props: {movie: Movie}) {

    const movieId: number = props.movie.id;
    const {addToFavorites, removeFromFavorties, isFavorite} = useContext(MovieContext) as MovieContextType;
    const favorite: boolean = isFavorite(movieId);

    function onFavoriteClick(e: SyntheticEvent) {
        e.preventDefault();
        if (favorite) removeFromFavorties(movieId)
            else addToFavorites(props.movie);
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://images.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? 'active' : ""}`} onClick={onFavoriteClick}>&hearts;</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{props.movie.title}</h3>
            <p>{props.movie.release_date?.split("-")[0]}</p>
        </div>
    </div>

}

export default MovieCard