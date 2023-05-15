import logo from "./logo.svg";
import "./App.css";
import { Card } from "./lib";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Inter&display=swap"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <Card
          title="Card Title"
          badgeText="experiment"
          description="A description of something very interesting that presumably relates to the card."
          infoText="Read more"
          infoUrl="#"
        ></Card>
      </header>
    </div>
  );
}

export default App;
