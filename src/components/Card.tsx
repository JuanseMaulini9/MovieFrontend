import styled from "styled-components";

interface Props {
  title: string,
  poster: string
}

export default function Card({title, poster}: Props){

  const CardStyle = styled.div`
    margin-left: 1rem;
    width: 150px;
    height: 200px;
    font-size: 10px;
    display: flex;
    flex-wrap: wrap;
  `
  const ImageContainerStyle = styled.div`
    height: 200px;
    width: 100%;
  `

  const ImageStyle = styled.img`
    width:100%;
    height: 100%;
    object-fit: contain;

  `
  const InfoContainer = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
  `
  const TitleStyle = styled.h2`
    color: #f5f5f5ab;
  `


  return(
    <CardStyle>
      <ImageContainerStyle>
      <ImageStyle src={`https://image.tmdb.org/t/p/original${poster}`} alt="" />
      </ImageContainerStyle>
      <InfoContainer>
      <TitleStyle>{title}</TitleStyle>
      </InfoContainer>
    </CardStyle>
  )

}