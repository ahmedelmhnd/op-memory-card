import { useEffect, useState } from "react";
import Card from "./card";
import "../styles/cards.css";

function Cards({handleScoreIncrease, handleScoreReset}) {
  const [cards, setCards] = useState("nothing yet");
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [clickedArray, setClickedArray] = useState([false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=WYyNB9NuL3IHXOUVzUY73Zs0eaHJwenQ&limit=9&offset=0&rating=g&bundle=messaging_non_clips";

    async function fetchData() {
      console.log("fetching");
      const response = await fetch(url);
      const json = await response.json();
      let cardsArray = [];
      json.data.forEach((entry) => {
        cardsArray.push({ url: entry.images.original.url, title: entry.title });
      });
      setCards(cardsArray);
    }
    fetchData();

    return () => {
      console.log("cleaning");
    };
  }, []);

  function handleReset() {
    setCardOrder([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setClickedArray([false, false, false, false, false, false, false, false, false]);
    handleScoreReset();
  }


  function cardClickHandler(cardId) {
    return function () {
      console.log("clicked", cardId);
      setCardOrder(shuffleArray(cardOrder));

      const newArray = [];
        clickedArray.forEach((e, i) => {
          newArray[i] = e;
        });

      if (clickedArray[cardId]) {
        console.log("already clicked");
        handleReset();
      }else{
        newArray[cardId] = true;
        setClickedArray(newArray)
        handleScoreIncrease();
      }
    };
  }

  function shuffleArray(array) {
    const newArray = [];

    array.forEach((element, i) => {
      newArray[i] = element;
    });

    newArray.forEach((element, i) => {
      const rand = Math.floor(Math.random() * newArray.length);
      const temp = newArray[i];
      newArray[i] = newArray[rand];
      newArray[rand] = temp;
    });
    return newArray;
  }

  return (
    <div className="cards-container">
      <Card
        props={cards[cardOrder[0]]}
        clickHandler={cardClickHandler(cardOrder[0])}
      ></Card>
      <Card
        props={cards[cardOrder[1]]}
        clickHandler={cardClickHandler(cardOrder[1])}
      ></Card>
      <Card
        props={cards[cardOrder[2]]}
        clickHandler={cardClickHandler(cardOrder[2])}
      ></Card>
      <Card
        props={cards[cardOrder[3]]}
        clickHandler={cardClickHandler(cardOrder[3])}
      ></Card>
      <Card
        props={cards[cardOrder[4]]}
        clickHandler={cardClickHandler(cardOrder[4])}
      ></Card>
      <Card
        props={cards[cardOrder[5]]}
        clickHandler={cardClickHandler(cardOrder[5])}
      ></Card>
      <Card
        props={cards[cardOrder[6]]}
        clickHandler={cardClickHandler(cardOrder[6])}
      ></Card>
      <Card
        props={cards[cardOrder[7]]}
        clickHandler={cardClickHandler(cardOrder[7])}
      ></Card>
      <Card
        props={cards[cardOrder[8]]}
        clickHandler={cardClickHandler(cardOrder[8])}
      ></Card>
    </div>
  );
}

export default Cards;
