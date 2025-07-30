import { createContext, useState, useContext, useEffect } from "react"
import { type MovieContextType, type Movie } from "../models/MovieModel"

const MovieContext = createContext<MovieContextType | null>(null);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = (children: React.ReactNode) => {
    const [favorites, setFavorites] = useState<Movie[]>([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie: Movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorties = (movieId: number) => {
        setFavorites(prev => prev.filter((movie: Movie) => movie.id !== movieId))
    }

    const isFavorite = (movieId: number) => {
        return favorites.some((movie: Movie) => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorties,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}