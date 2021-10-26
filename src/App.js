import "./App.css";

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
    <div className="board">
      {boardLists
        ? boardLists.map((boardList) => (
            <div className="list">
              <p>{boardList.boardName}</p>
              {boardList.list
                ? boardList.list.map((list) => (
                    <div className="card">{list.data}</div>
                  ))
                : null}
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
