import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import type { Movie } from "../models/MovieModel";
import { useState, type SyntheticEvent, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies");
            }
            finally {
                setLoading(false)
            }
        }
    }, [])

    const handleSearch = (e: SyntheticEvent) => {
        e.preventDefault();
        alert(searchQuery);
    }


    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Submit</button>
        </form>
        <div className="movies-grid">
            {movies.map((this_movie: Movie) => (
                 this_movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={this_movie} key={this_movie.id}/>
                ))}
        </div>
    </div>
}

export default Home;