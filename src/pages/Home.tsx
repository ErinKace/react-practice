import MovieCard from "../components/MovieCard"
import type { Movie } from "../models/MovieModel"

function Home() {
    const movies : Movie[] = [
        {id:1, title: "Kpop Demon Hunters", url: "", release_date: "2025", favorite: false},
        {id:1, title: "Sinners", url: "", release_date: "2025", favorite: false},
        {id:1, title: "Dungeons & Dragons", url: "", release_date: "2022", favorite: false},
        {id:1, title: "West Side Story", url: "", release_date: "1960", favorite: false},
    ]


    return <div className="home">
        <div className="movies-grid">
            {movies.map(this_movie => (
                <MovieCard movie={this_movie} key={this_movie.id}/>
                ))}
        </div>
    </div>
}