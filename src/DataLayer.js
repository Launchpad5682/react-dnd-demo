import { createContext, useContext, useState } from "react";

export const DataStoreContext = createContext();

export const useDataStoreContext = () => useContext(DataStoreContext);

export const DataStoreProvider = (props) => {
  const [boardLists, setBoardLists] = useState([
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
  ]);

  const value = { boardLists, setBoardLists };

  return (
    <DataStoreContext.Provider value={value}>
      {props.children}
    </DataStoreContext.Provider>
  );
};
