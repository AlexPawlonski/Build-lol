import { useContext } from "react";
import { Header } from "./components/organism";
import { GlobalContext } from "./globalContext";
import { ChampSelect, DataView } from "./page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { classNames } from "./utils";

function App() {
  const { router, champSelected, champStats, champPerLvl, level, settingOpen } = useContext(GlobalContext);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classNames(settingOpen && "overflow-hidden")}>
        <Header />
        <main className={classNames(settingOpen && "pt-[56px]", "relative flex z-10")}>
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
