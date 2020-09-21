import React, { useState } from "react";
import "./index.css";
import { Input } from "antd";
import navBar from "../Content/assets/nav_bar.png";

const { Search } = Input;

const Header = React.memo(({ title, filterPoster }) => {
  // const [searchText, setSearchText] = useState("hhh");
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="search">
        <Search
          style={{ width: "00" }}
          onSearch={(value) => filterPoster(value)}
        />
      </div>
    </div>
  );
});

export default Header;
