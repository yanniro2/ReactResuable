import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Data from "./Components/CardElements";

export default function App() {
  const cards = Data.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <>
      <Nav />
      <div className="card-class">{cards}</div>
    </>
  );
}
