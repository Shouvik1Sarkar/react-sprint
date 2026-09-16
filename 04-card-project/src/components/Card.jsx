function Card(props) {
  return (
    <div className="job-card">
      <div className="card-top">
        <div className="company-logo">
          <img src={props.brandLogo} alt={`${props.company} logo`} />
        </div>

        <button className="save-btn">Save ♡</button>
      </div>

      <div className="company-info">
        <span className="company-name">{props.company}</span>
        <span className="posted-time">{props.datePosted}</span>
      </div>

      <h2 className="job-title">{props.post}</h2>

      <div className="job-tags">
        <span>{props.tag1}</span>
        <span>{props.tag2}</span>
      </div>

      <div className="divider"></div>

      <div className="card-bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <p>{props.location}</p>
        </div>

        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  );
}
export default Card;
