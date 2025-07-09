import './App.css'
import MovieCard from "./components/MovieCard.tsx"

function App() {

  const movieCount = 1;

  return (
      <> {movieCount === 1 &&
        <MovieCard movie={{title: "Erin", url: "", release_date: "2025", favorite: false}}/>
        }
      </>
  )
}

export default App
