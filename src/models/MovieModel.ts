export interface Movie {
    id:number;
    title: string;
    poster_path: string;
    release_date: string;
    favorite: boolean;
}

export type MovieContextType = {
    favorites: Movie[];
    addToFavorites: (movie: Movie) => void;
    removeFromFavorties: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
}