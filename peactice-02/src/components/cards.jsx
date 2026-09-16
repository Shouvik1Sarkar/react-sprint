function Card(props) {
  return (
    <div className="profile-card">
      <div className="profile-top">
        {props.available && <span className="available">available</span>}

        <span className="price">${props.payment}/hr</span>
      </div>

      <img className="profile-image" src={props.image} alt="Profile" />

      <h2 className="profile-name">{props.name}</h2>

      <p className="profile-role">{props.role}</p>

      {/* <p className="profile-company">▣ Epic Coders</p> */}
      {/* <p className="profile-company">{props.company}</p> */}

      <p className={props.type === "freelancer" ? "freelancer" : "company"}>
        <span className="type-icon">
          {props.type === "freelancer" ? "♙" : "▣"}
        </span>
        {props.company}
      </p>

      <div className="skills">
        {props.skills.map((element) => {
          <span>{element}</span>;
        })}

        {/* <span className="more-skills">+4</span> */}
      </div>

      <p className="profile-description">{props.description}</p>

      <div className="small-line"></div>

      <button className="profile-button">VIEW PROFILE</button>
    </div>
  );
}

export default Card;
