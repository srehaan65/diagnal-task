import React from "react";
import "./index.css";
import { Row, Col, Input } from "antd";

const { Search } = Input;

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="search">
        <Search
          // placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: "00", backgroundColor: "#000000" }}
        />
      </div>
    </div>
  );
};

export default Header;
