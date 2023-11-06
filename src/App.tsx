import { useContext } from "react";
import { Header, Inventory, Nav } from "./components/organism";
import { GlobalContext } from "./globalContext";
import { ChampSelect, DataView } from "./page";
import { classNames } from "./utils";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const { router, champSelected, itemHover } = useContext(GlobalContext);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header />
        <main className="relative flex">
          <div className={classNames(champSelected && "w-[20%]")}>
            <Nav />
            {router === "data" && <Inventory />}
          </div>
          {router === "data" && champSelected && <DataView champSelected={champSelected} itemHover={itemHover} />}
          {router === "champSelect" && <ChampSelect />}
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
