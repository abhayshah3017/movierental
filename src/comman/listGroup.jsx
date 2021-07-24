import React from "react";

const ListGroup = (props) => {
  const { items, valueProperty, textProperty, onItemSelect, selectedItem } =
    props;
  // console.log({ items });
  return (
    <ul className="list-group">
      {items.map((i) => (
        <li 
          key={i[valueProperty]}
          onClick={() => onItemSelect(i)}
          className={
            i === selectedItem ? "list-group-item active" : "list-group-item"
          } 
        >
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
