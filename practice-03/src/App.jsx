import Cards from "./components/Cards.jsx";
import profiles from "./data.js";

console.log("profiles", profiles);

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
      {profiles.map((elem) => {
        return (
          <Cards
            name={elem.name}
            image={elem.image}
            payment={elem.payment}
            available={elem.available}
            role={elem.role}
            company={elem.company}
            type={elem.type}
            skills={elem.skills}
            description={elem.description}
          />
        );
      })}
    </>
  );
}
export default App;
