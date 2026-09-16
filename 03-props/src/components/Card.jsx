function Card(props) {
  return (
    <>
      <div className="card">
        <img className="card-image" src={props.src} alt="Card" />

        <div className="card-content">
          <h1>{props.name}</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod
            quo tempora voluptate.
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
