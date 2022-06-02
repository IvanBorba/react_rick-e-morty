import "./style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt={`Foto de ${props.name}`} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Card;
