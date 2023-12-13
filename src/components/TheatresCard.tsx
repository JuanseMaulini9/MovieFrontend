import { Structure } from "../types"
import styled from "styled-components"

interface Props {
  theatres: Structure[],
  index: number
}

export default function TheatresCard({theatres, index}: Props){
  
  const TheatresCardStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 75vh;
  `

  const BackgroundStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
  const PosterStyle = styled.img`
    width: auto;
    height: 550px;
    object-fit: contain;
    position: absolute;
    top: 20%;
    left: 10%;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  `
  
  
  return(
    <TheatresCardStyle>
      <BackgroundStyle src={`https://image.tmdb.org/t/p/original${theatres[index].coverPath}`}/>
      <PosterStyle src={`https://image.tmdb.org/t/p/original${theatres[index].posterPath}`}></PosterStyle>
    </TheatresCardStyle>
    
    
  ) 
}