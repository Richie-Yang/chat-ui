import React from "react";

type Item = {
  name: string;
  onClickItem?: (event: React.MouseEvent) => void;
};

interface Props {
  items: Item[];
}

export default function Navbar(props: Props) {
  return (
    <ul className="tab-container nav nav-pills">{_listNavBarItems(props)}</ul>
  );
}

function _listNavBarItems(props: Props) {
  const { items } = props;

  return items.map((item) => (
    <li key={item.name} className="nav-item">
      <a
        className="nav-link"
        key={item.name}
        href=""
        onClick={(event) => {
          if (item.onClickItem) item.onClickItem(event);
        }}
      >
        {item.name}
      </a>
    </li>
  ));
}
