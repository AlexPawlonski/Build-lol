import { useContext } from "react";
import { ChampSelect, Header, Nav, DataView } from "./components/organism";
import { GlobalContext } from "./globalContext";

function App() {
  const { router } = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <main className="relative flex">
        <Nav />
        {router === "data" && <DataView />}
        {router === "champSelect" && <ChampSelect />}
      </main>
    </div>
  );
}

export default App;
