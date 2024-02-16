function Card({ serviceTitle, serviceDescription, fileName1 }) {
  return (
    <>
      <div className="card-container">
        <div>
          <img
            src={`../src/assets/${fileName1}`}
            alt="for img"
            className="img-1"
          />
        </div>
        <div className="service-card-information">
          <div>
            <h1 className="title-service">{serviceTitle}</h1>
          </div>
          <div>
            <p className="card-text">{serviceDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
