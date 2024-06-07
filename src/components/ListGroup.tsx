import { Dispatch, useState } from "react";

interface Props {
  items: string[];
  title: string;
  onSelectItem?: (item: string) => void;
}

export default function ListGroup(props: Props) {
  const { title } = props;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {_listGroupItems(selectedIndex, setSelectedIndex, props)}
      </ul>
    </>
  );
}

function _listGroupItems(
  selectedIndex: number,
  setSelectedIndex: Dispatch<React.SetStateAction<number>>,
  props: Props
) {
  const { items, onSelectItem } = props;
  if (items.length === 0) return <p>No items</p>;

  return items.map((item, index) => (
    <li
      key={item}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        if (onSelectItem) onSelectItem(item);
      }}
    >
      {item}
    </li>
  ));
}
