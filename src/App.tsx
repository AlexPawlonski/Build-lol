import { useContext } from "react";
import { ChampSelect, Header, Nav, DataView } from "./components/organism";
import { GlobalContext } from "./globalContext";

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
