import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";
import { DataStoreProvider } from "./DataLayer";

function App() {
  return (
    <DataStoreProvider>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </DataStoreProvider>
  );
}

export default App;
