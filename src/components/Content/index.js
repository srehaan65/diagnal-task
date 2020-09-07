import React from "react";
import { Card, Row, Col } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { posters } from "./assets/posters";
import "./index.css";

const Content = React.memo(({ data, fetchImages }) => {
  return data.length ? (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchImages}
      hasMore={true}
      loader={<h4>Loading ... </h4>}
    >
      <Row className="poster-list">
        {data.map((item, index) => {
          const posterName = item["poster-image"].split(".").slice(0, 1)[0];
          return (
            <Col span={8} className="poster-container" key={index}>
              <img className="poster" src={posters[posterName]}></img>
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
        })}
      </Row>
    </InfiniteScroll>
  ) : null;
});

export default Content;
