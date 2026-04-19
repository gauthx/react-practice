import { useState } from "react";
import "./App.css";
import pokedex from "./data/a.json";

const PokemonImage = (props) => (
  <div className="image-container">
    <img src={`${props.imageUrl}`} />
  </div>
);

const PokemonName = ({ name }) => (
  <div className="name">
    <h2>{name}</h2>
  </div>
);

const Types = ({ types }) => (
  <div key={2} className="types-container">
    {types.map((type, idx) => (
      <div key={idx} className={`type ${type}`}>
        <p>{type}</p>
      </div>
    ))}
  </div>
);

const Stats = (props) => (
  <div className="stats-container">
    {Object.entries(props.stats).map(([stat, val], idx) => (
      <div key={idx} className="stat">
        <p className="stat-name"> {stat}</p>
        <p className="stat-value"> {val}</p>
      </div>
    ))}
  </div>
);

const CardDetails = (props) => {
  return (
    <div className="card-details">
      <div key={1} className="name-types-container">
        <PokemonName {...props}></PokemonName>
        <Types {...props}></Types>
      </div>

      <Stats {...props}></Stats>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card">
      <PokemonImage {...props}></PokemonImage>
      <CardDetails {...props}></CardDetails>
    </div>
  );
};

const Nav = (props) => {
  return (
    <button className="nav" value={props.type}>
      {props.type}
    </button>
  );
};

const Navs = ({ setType }) => {
  const types = [
    "all",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  return (
    <div id="side-bar" onClick={(event) => setType(event.target.value)}>
      <div id="navs-container">
        {types.map((type, index) => (
          <Nav type={type}></Nav>
        ))}
      </div>
    </div>
  );
};

const Cards = ({ pokedex, setKeyword }) => {
  return (
    <div id="cards-container">
      <input type="text" onChange={(event) => setKeyword(event.target.value)} />
      {pokedex.map((pokemon, idx) => (
        <Card {...pokemon} key={idx}></Card>
      ))}
    </div>
  );
};

const App = () => {
  const [selectedType, setType] = useState("all");
  const [keyword, setKeyword] = useState("");

  const selectedTypePokemons =
    selectedType === "all"
      ? pokedex
      : pokedex.filter((pokemon) => pokemon.types.includes(selectedType));

  const matchingPokemons = selectedTypePokemons.filter((pokemon) =>
    pokemon.name.startsWith(keyword),
  );

  return (
    <div id="main-container">
      <Navs setType={setType} selectedType={selectedType}></Navs>
      <Cards pokedex={matchingPokemons} setKeyword={setKeyword} />
    </div>
  );
};

export default App;
