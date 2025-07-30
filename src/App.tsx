import './css/App.css';
import Home from "./pages/Home.tsx";
import Favorites from "./pages/Favorites.tsx";
import NavBar from './components/NavBar.tsx';
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext.tsx';

function App() {

  return (
    <MovieProvider>
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element= {<Favorites/>}/>
        </Routes>
      </main>
    </div>
    </MovieProvider>
  )
}

export default App
