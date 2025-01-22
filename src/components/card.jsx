import "../styles/card.css";

function Card({ props, clickHandler }) {
  return (
    <div className="card" onClick={clickHandler}>
      <img className="card-image" src={props.url} alt="" />

      <div className="card-title">{props.title}</div>
    </div>
  );
}

export default Card;
