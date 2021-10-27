import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";
import { useDataStoreContext } from "./DataLayer";

function List({ boardName, list, boardId }) {
  const updateBoardListOnDnD = (boardId, data, newBoardId) => {
    console.table("prev", "updBoard", "data");
    console.table(boardId, newBoardId, data);

    let tempData = boardLists.find((element) => element.boardId === boardId);
    const tempIndex = boardLists.indexOf(tempData);
    let updData = boardLists.find((element) => element.boardId === newBoardId);
    const updIndex = boardLists.indexOf(updData);

    let tempList = [...boardLists];
    const dataIndex = tempData.list.indexOf((element) => element.data === data);
    tempData.list.splice(dataIndex);

    updData.list.push({ data: data });

    if (tempIndex === -1) {
      tempList[tempIndex] = tempData;
    }

    if (updIndex === -1) {
      tempList[updIndex] = updData;
    }

    setBoardLists([...tempList]);
  };

  const [, drop] = useDrop(
    () => ({
      accept: "card",
      drop: (item) => updateBoardListOnDnD(item.boardId, item.data, boardId),
    }),
    boardId
  );

  const { boardLists, setBoardLists } = useDataStoreContext();

  return (
    <div className="list" ref={drop}>
      <p>{boardName}</p>
      {list
        ? list.map((list) => <Card data={list.data} boardId={boardId} />)
        : null}
    </div>
  );
}

export default List;
