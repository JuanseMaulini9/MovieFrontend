import Card from "./Card";
import { Structure } from "../types";
import styled from "styled-components";

interface Props {
  list: Structure[]
}

export default function CardContainer({list}: Props){

  const CardContainerStyle = styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    gap: 10px;
    overflow: scroll;
  `

  return(
    <CardContainerStyle>
      {list.map(item => {
        return <Card key={item.id} title={item.title} poster={item.posterPath}/>
      })}
    </CardContainerStyle>
  )
}