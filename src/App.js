import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";

function App() {
  const boardLists = [
    {
      boardId: "1",
      boardName: "To-Do",
      list: [
        { data: "Complete to-do implementation" },
        { data: "Figure out React-DnD" },
      ],
    },
    {
      boardId: "2",
      boardName: "Doing",
      list: [{ data: "Trying to figure out the React-DnD implementation" }],
    },
    {
      boardId: "3",
      boardName: "Done",
      list: [{ data: "Referred React-DnD documentation" }],
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <Board boardLists={boardLists} />
    </DndProvider>
  );
}

export default App;
