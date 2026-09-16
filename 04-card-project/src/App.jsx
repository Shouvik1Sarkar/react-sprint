import Card from "./components/Card.jsx";
import jobs from "./data/job-data.js";

//   {
//     id: 1,
//     brandLogo: "https://logo.clearbit.com/google.com",
//     company: "Google",
//     datePosted: "2 days ago",
//     post: "Frontend Developer",
//     tag1: "Full-Time",
//     tag2: "Junior Level",
//     pay: 85,
//     location: "Bengaluru, India",
//   },

function App() {
  return (
    <>
      <div className="jobs-container">
        {jobs.map((e, idx) => {
          return (
            <div key={idx}>
              <Card
                brandLogo={e.brandLogo}
                company={e.company}
                datePosted={e.datePosted}
                post={e.post}
                tag1={e.tag1}
                tag2={e.tag2}
                pay={e.pay}
                location={e.location}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
