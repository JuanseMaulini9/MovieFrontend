import { useEffect, useState } from 'react'
import CardContainer from './components/CardContainer'
import Navbar from './components/Navbar'
import { Structure } from './types'
import styled from 'styled-components'
import './App.css'
import Theatres from './components/Theatres'

function App() {

  const PrincipalStyle = styled.div`

    display:flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  `

  const [movies, setMovies] = useState<Structure[]>([])

  useEffect(()=>{
    fetch('http://localhost:4000/popular')
      .then(res => res.json())
      .then(data => setMovies(data))
      
  }, [])

  return (
    <PrincipalStyle>
      <Navbar></Navbar>
      <Theatres></Theatres>
      <CardContainer list={movies}></CardContainer>
    </PrincipalStyle>
  )
}

export default App
