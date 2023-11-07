import { useContext } from "react";
import { Header } from "./components/organism";
import { GlobalContext } from "./globalContext";
import { ChampSelect, DataView } from "./page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const { router, champSelected, itemHover } = useContext(GlobalContext);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header />
        <main className="relative flex z-10">
          {router === "data" && champSelected && <DataView champSelected={champSelected} itemHover={itemHover} />}
          {router === "champSelect" && <ChampSelect />}
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
