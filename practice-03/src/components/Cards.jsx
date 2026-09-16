function Cards(props) {
  return (
    <div className="profile-card">
      <div className="profile-top">
        {props.available && <span className="available"> "available"</span>}
        <span className="price">${props.payment}/hr</span>
      </div>

      <img className="profile-image" src={props.image} alt="Profile" />

      <h2 className="profile-name">{props.name}</h2>

      <p className="profile-role">{props.role}</p>

      <p className={props.type === "company" ? "company" : "freelancer"}>
        {props.type === "company" ? "▣" : "♙"}

        {props.company}
      </p>

      <div className="skills">
        {props.skills.map((e) => {
          return <span>{e}</span>;
        })}
      </div>

      <p className="profile-description">{props.description}</p>

      <div className="small-line"></div>

      <button className="profile-button">VIEW PROFILE</button>
    </div>
  );
}

// function Cards() {
//   return (
//     <>
//       <h1>hello</h1>
//     </>
//   );
// }

export default Cards;
