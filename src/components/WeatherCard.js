import React from "react";
import styled from "styled-components";
import "./WeatherCard.css";

const Contain = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  height: 50vh;
`;

const Card = styled.div`
  /* border: 1px solid black; */
  /* background-image: url("../assets/warmday.jpg"); */
  width: 30%;
  height: 50vh;
`;

const WeatherCard = (props) => {
  if (parseInt(props.temp, 10) > 70) {
    Card.className = "cardwarm";
    //console.log("#1 ran", Card.className);
  } else {
    Card.className = "cardcold";
    //console.log("#2 ran", Card.className);
  }

  //console.log(parseInt(props.temp, 10));
  //"cardcold cardwarm"
  return (
    <>
      <Contain>
        <Card>
          <p>{props.name}</p>
          <p>{props.temp}</p>
          <p>{props.type}</p>
          <p>{props.desc}</p>
        </Card>
      </Contain>
    </>
  );
};

export default WeatherCard;
