import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import type { Movie } from "../models/MovieModel";
import { useState, type SyntheticEvent } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies : Movie[] = [
        {id:1, title: "Kpop Demon Hunters", url: "", release_date: "2025", favorite: false},
        {id:2, title: "Sinners", url: "", release_date: "2025", favorite: false},
        {id:3, title: "Dungeons & Dragons", url: "", release_date: "2022", favorite: false},
        {id:4, title: "West Side Story", url: "", release_date: "1960", favorite: false},
    ]

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
            {movies.map((this_movie) => (
                 this_movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={this_movie} key={this_movie.id}/>
                ))}
        </div>
    </div>
}

export default Home;