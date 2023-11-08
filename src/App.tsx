import { useContext } from "react";
import { Header } from "./components/organism";
import { GlobalContext } from "./globalContext";
import { ChampSelect, DataView } from "./page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const { router, champSelected, champStats, champPerLvl, level } = useContext(GlobalContext);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header />
        <main className="relative flex z-10">
          {router === "data" && champSelected && champStats && champPerLvl && (
            <DataView champSelected={champSelected} champStats={champStats} champPerLvl={champPerLvl} lvl={level} />
          )}
          {router === "champSelect" && <ChampSelect />}
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
