import React from "react";
import "./index.css";
import { Input } from "antd";

const { Search } = Input;

const Header = React.memo(({ title, filterPoster }) => {
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="search">
        <Search
          onChange={(value) => filterPoster(value)}
          style={{ width: "00" }}
        />
      </div>
    </div>
  );
});

export default Header;
