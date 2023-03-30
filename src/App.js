import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//page components
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';


//pages styles

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route path='/create' element={<Create/>}>
          </Route>
          <Route path='/recipes/:id' element={<Recipe/>}>
          </Route>
          <Route path='/search' element={<Search/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App