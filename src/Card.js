import React from "react";
import { useDrag } from "react-dnd";

function Card({ boardId, data }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="card"
      boardId={boardId}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {data}
    </div>
  );
}

export default Card;
