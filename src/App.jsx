import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import { db } from "./db/db";
import "./App.css";

function App() {
  const [allItems] = useState(db.res);
  const [filtered, setFiltered] = useState(db.res);

  function searchFunc(value) {
    const q = value.trim().toLowerCase();
    if (!q) {
      setFiltered(allItems);
      return;
    }
    setFiltered(
      allItems.filter((item) => item.name.toLowerCase().startsWith(q)),
    );
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Приложения</h1>
        <Search searchFunc={searchFunc} />
      </header>

      <main className="app__main">
        <List data={{ res: filtered }} />
      </main>

      {filtered.length === 0 && <p className="app__empty">Ничего не найдено</p>}
    </div>
  );
}

export default App;
