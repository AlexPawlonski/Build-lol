import { useContext } from "react";
import { Header } from "./components/organism";
import { GlobalContext } from "./globalContext";
import { ChampSelect, DataView } from "./page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { classNames } from "./utils";

function App() {
  const { router, champSelected, champStats, champPerLvl, level, settingOpen } = useContext(GlobalContext);
  const isMobile = /Android/i.test(navigator.userAgent);

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <div className={classNames(settingOpen && "overflow-hidden h-screen")}>
        <Header />
        <main className={classNames("relative flex z-10 ")}>
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
