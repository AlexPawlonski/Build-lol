import { useContext } from "react";
import { Header, Nav } from "./components/organism";
import { GlobalContext } from "./globalContext";
import { ChampSelect, DataView } from "./page";

function App() {
  const { router, champSelected } = useContext(GlobalContext);
  return (
    <div>
      <Header />
      <main className="relative flex">
        <Nav />
        {router === "data" && champSelected && <DataView champSelected={champSelected} />}
        {router === "champSelect" && <ChampSelect />}
      </main>
    </div>
  );
}

export default App;
