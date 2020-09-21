import React, { useState, useCallback, useMemo } from "react";
import { Card, Row, Col } from "antd";
import { posters } from "./assets/posters";
import "./index.css";

const Content = React.memo(({ data, fetchImages2, fetchImages3 }) => {
  console.log("Content renders");
  const myData = useMemo(() => data, [data]);

  const scrollHandler = useCallback(() => {
    console.log(window.scrollY);
    if (window.scrollY > 400 && window.scrollY < 800) {
      console.log("vvv");
      fetchImages2();
    } else if (window.scrollY > 800) {
      console.log("zzz");
      fetchImages3();
    } else {
      return;
    }
  }, [window.scrollY]);

  const ContentItem = React.memo(({ item, posterName }) => {
    console.log("Item renders");
    return (
      <Col span={8} className="poster-container">
        <img className="poster" src={posters[posterName]} alt="image"></img>
        <p
          style={{
            color: "#fff",
            width: "80px",
            fontSize: "10px",
            textAlign: "left",
          }}
        >
          {item.name}
        </p>
      </Col>
    );
  });

  window.addEventListener("scroll", scrollHandler);
  return myData.length ? (
    <Row className="poster-list">
      {myData.map((item, index) => {
        const posterName = item["poster-image"].split(".").slice(0, 1)[0];
        return <ContentItem key={index} item={item} posterName={posterName} />;
      })}
    </Row>
  ) : null;
});

export default Content;
