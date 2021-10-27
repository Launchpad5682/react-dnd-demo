import React from "react";
import Card from "./Card";

function Board({ boardLists }) {
  return (
    <div className="board">
      {boardLists
        ? boardLists.map((boardList) => (
            <div className="list">
              <p>{boardList.boardName}</p>
              {boardList.list
                ? boardList.list.map((list) => (
                    <Card data={list.data} boardId={list.boardId} />
                  ))
                : null}
            </div>
          ))
        : null}
    </div>
  );
}

export default Board;
