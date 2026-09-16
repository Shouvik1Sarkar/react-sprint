import Card from "./components/cards.jsx";
import profiles from "./jobs.js";

// {
//   id: 1,
//   name: "Wade Wilson",
//   image: "https://i.pravatar.cc/300?img=11",
//   payment: 55,
//   available: true,
//   role: "UI/UX Designer",
//   company: "Epic Coders",
//   type: "company",
//   skills: ["UI", "UX", "Photoshop", "Figma"],
//   description:
//     "Wade is a UI/UX designer with an impressive portfolio and experience building modern digital products.",
// },

function App() {
  return (
    <>
      {profiles.map((element) => {
        return (
          <Card
            name={element.name}
            image={element.image}
            payment={element.payment}
            available={element.available}
            role={element.role}
            company={element.company}
            type={element.type}
            skills={element.skills}
            description={element.description}
          />
        );
      })}
    </>
  );
}
export default App;
