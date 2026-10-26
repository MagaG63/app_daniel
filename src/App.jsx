import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import { db } from "./db/db";

function App() {
  const [state, setState] = useState(db);

  // function changeFu

  return (
    <>
      <Search />
      <List data={state} />
    </>
  );
}

export default App;
