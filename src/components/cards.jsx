import { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState("nothing yet");

  const url =
    "https://api.giphy.com/v1/gifs/trending?api_key=WYyNB9NuL3IHXOUVzUY73Zs0eaHJwenQ&limit=9&offset=0&rating=g&bundle=messaging_non_clips";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      console.log("fetching");
      setCards(json.data[0].images.original.url);
    }
    fetchData();

    return () => {
      console.log("cleaning");
    };
  }, []);

  return (
    <>
      <img src={cards} alt="gif1" />
    </>
  );
}

export default Cards;
