import { useEffect, useState } from "react";
import { Structure } from "../types";
import TheatresCard from "./TheatresCard";
import styled from "styled-components";

export default function Theatres() {
  const TheatresStyle = styled.div`
    display: flex;
  `;

  const TheatreCardsStyle = styled(TheatresCard)`
    position: relative;
  `;

  const ButtonStyle = styled.button`
    position: absolute;
    display: flex;
    top: 50%;
    z-index: 100;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border-style: none;
    font-size: 3rem;
    cursor: pointer;
    background-color: transparent;
  `;

  const ButtonStyleR = styled(ButtonStyle)`
    right: 5%;
  `;
  const ButtonStyleL = styled(ButtonStyle)`
    left: 5%;
  `;

  const [theatres, setTheatres] = useState<Structure[]>([]);

  const [index, setIndex] = useState(0);



  useEffect(() => {
    fetch("http://localhost:4000/theatres")
      .then((response) => response.json())
      .then((data) => setTheatres(data));

  }, []);
  
  useEffect(() => {
    const intervalId = setInterval(advanceIndex, 5000);
    return () => clearInterval(intervalId);
  }, [index]);
  
  function advanceIndex() {
    if (index + 1 > theatres.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }


  function backIndex() {
    if (index - 1 < 0) {
      setIndex(theatres.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <TheatresStyle>
      <ButtonStyleL onClick={backIndex}> {"<"} </ButtonStyleL>
      {theatres.length ? (
        <TheatreCardsStyle
          theatres={theatres}
          index={index}
        ></TheatreCardsStyle>
      ) : (
        ""
      )}
      <ButtonStyleR onClick={advanceIndex}> {">"} </ButtonStyleR>
    </TheatresStyle>
  );
}
