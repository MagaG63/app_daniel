export default function List({ data }) {
  return (
    <>
      <ul>
        {data.res.map((item) => (
          <>
            <li>{item.name}</li>
            <img src={item.img} alt="" />
          </>
        ))}
      </ul>
    </>
  );
}
