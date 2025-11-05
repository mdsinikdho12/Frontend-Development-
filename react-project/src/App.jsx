import "./App.css";

import RenderingLists from "./Components/RenderingLists";
import ManagingState from "./Components/ManagingState";

function Item({ name, isPacked }) {
  // controller/togical part
  const isCheckMark = isPacked ? "✅" : null;

  // Logical or oparator
  //  const isCheckMark = isPacked && "✅" ;

  // view
  return (
    <li className="item">
      {" "}
      {name} {isCheckMark}
    </li>
  );
}

function App() {
  const pasckingList = [
    {
      id: 1,
      name: "sinikdho ",
      isPacked: true,
    },
    {
      id: 2,
      name: "sinikdho ",
      isPacked: true,
    },
    {
      id: 3,
      name: "sinikdho ",
      isPacked: false,
    },
  ];
  return (
    <>
      <h1> Conditional Rendering</h1>
      <ul>
        {pasckingList.map((list) => (
          <Item name={list.name} isPacked={list.isPacked} />
        ))}
      </ul>

      <RenderingLists />
      <ManagingState />
    </>
  );
}

export default App;
