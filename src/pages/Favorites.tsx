import "../css/Favorites.css"
import { MovieContext } from "../contexts/MovieContext"
import { useContext } from "react"
import type { MovieContextType } from "../models/MovieModel"
import MovieCard from "../components/MovieCard";

function Favorites() {
    const {favorites} = useContext(MovieContext) as MovieContextType;

    if (favorites) {
        return <div className="favorites">
            <h2>Favorites</h2>
            <div className="movies-grid">
                {favorites.map((favMovie) => (
                    <MovieCard movie={favMovie} key={favMovie.id}/>
                ))}
            </div>
        </div>
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
}

export default Favorites