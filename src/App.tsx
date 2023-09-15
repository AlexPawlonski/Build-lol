import { ChampSelect, Header, Nav } from "./components/organism";

function App() {
  return (
    <div>
      <Header />
      <main className="relative flex">
        <Nav />
        <ChampSelect />
      </main>
    </div>
  );
}

export default App;
