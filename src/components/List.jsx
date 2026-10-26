import "./List.css";

export default function List({ data }) {
  return (
    <ul className="tiles">
      {data.res.map((item) => (
        <li className="tile" key={item.id}>
          <div className="tile__icon">
            <img className="tile__img" src={item.img} alt="" loading="lazy" />
          </div>
          <span className="tile__name">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
