import React from "react";
import { useDataStoreContext } from "./DataLayer";
import List from "./List";

function Board() {
  const { boardLists } = useDataStoreContext();

  return (
    <div className="board">
      {boardLists
        ? boardLists.map((boardList) => (
            <List
              boardName={boardList.boardName}
              list={boardList.list}
              boardId={boardList.boardId}
            />
          ))
        : null}
    </div>
  );
}

export default Board;
