import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard.js";

import styled from "styled-components";

import "./styles.css";

export default function App() {
  // State
  const searchList = [];

  const [list, setList] = React.useState(searchList);

  const [search, setSearch] = useState("");

  const [weather, setWeather] = useState({
    temp: "",
    type: "",
    desc: "",
    name: ""
  });

  // Logic and variables
  const K = weather.temp;
  const F = K * (9 / 5) - 459.67;

  const url = `//https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=85f48bfed6f16f0b4ac5840f56199b17`;

  // Functions
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  function preventForm(event) {
    if (search) {
      setList(list.concat(search));
    }

    setSearch("");
    event.preventDefault();
  }

  // Axios request
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("Data: ", res.data);
        setWeather({
          temp: res.data.main.temp,
          type: res.data.weather["0"].main,
          desc: res.data.weather["0"].description,
          name: res.data.name
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [search]);

  //Styling
  //const listitem = styled.li``;
  const listcontain = styled.ul`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  `;

  // HTML
  return (
    <div className="App">
      <form onSubmit={preventForm}>
        <p>
          Type in city name & country code with no spaces: ex Paris,FR or
          London,uk
        </p>
        <input
          placeholder="Enter value here"
          type="text"
          value={search}
          onChange={handleChange}
        ></input>
        {/* <input
          placeholder="Search a stock by it's ticker"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <button onClick={console.log(url)} type="submit">
          Submit
        </button>
      </form>
      <WeatherCard
        temp={F.toFixed(0)}
        type={weather.type}
        desc={weather.desc}
        name={weather.name}
      />
      <p>Your Recent Searches: </p>
      <listcontain>
        {list.map((item) => (
          <li key={item}>{item} </li>
        ))}
      </listcontain>
    </div>
  );
}
