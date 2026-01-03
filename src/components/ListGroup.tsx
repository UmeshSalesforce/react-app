import { MouseEvent } from "react";
function ListGroup() {
  const items = ["India", "USA", "England"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1> New List </h1>
      {items.length == 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group=item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
