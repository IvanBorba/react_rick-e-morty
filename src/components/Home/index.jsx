import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async () => {
    const response = await fetch(url);
    const list = await response.json();

    setCharacters([...characters, ...list.results]);
    setUrl(list.info.next);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    if (!url) {
      getCharacters();
    }
  }, [url]);

  return (
    <div className="home-container">
      <h1>Lista de Personagens</h1>
      <div className="cardsList-container">
        {characters.map((element) => {
          return (
            <Card key={element.id} name={element.name} image={element.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
