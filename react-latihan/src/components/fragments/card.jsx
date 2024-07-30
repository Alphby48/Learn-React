import Button from "../elements/button";
const Card = (props) => {
  const { image, title, price, onClick, val, keys } = props;
  return (
    <>
      <div className="card" key={keys}>
        <img src={image} className="card-img-top image" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Member {price}</p>
          <div>
            <Button onClick={() => onClick(val)} datatype={val}>
              Detail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
