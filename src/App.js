import MovieCard from './components/MovieCard'

import { useEffect, useState } from 'react'

import './App.css'

export default function App() {

  const API_key = '7df2a1ea'
  const API_URL = `http://www.omdbapi.com/?apikey=${API_key}`

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    setMovies(data.Search)
  }

  useEffect(() =>{
    getMovie('Batman')
  }, [])
  
  return (
    <div className='app'>
      <h1>Movie App</h1> 
      <div className='search'>
        <input type="text" 
          placeholder='search movie' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={() => getMovie(search)}
        />
        { console.log(search) }
      </div>
      <div className="grid">
        {
          movies?.length > 0 
          ? 
          movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
          :
          <div>
            <div className="empty">
              <h2>No movies found!</h2>
            </div>
          </div> 
        }
      </div>
    </div>
  )
}