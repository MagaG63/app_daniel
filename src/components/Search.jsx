import { useEffect, useState } from "react";
import "./Search.css";

export default function Search({ searchFunc }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    searchFunc(value);
  }, [value]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Поиск приложений"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}