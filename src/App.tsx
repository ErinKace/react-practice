import './App.css';
import Home from "./pages/Home.tsx";
import Favorites from "./pages/Favorites.tsx"
import NavBar from './components/NavBar.tsx';
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element= {<Favorites/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
