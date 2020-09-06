import React from "react";
import { Card, Row, Col } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { posters } from "./assets/posters";

const Content = ({ data, fetchImages }) => {
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchImages}
      hasMore={true}
      loader={<h4>Loading ... </h4>}
    >
      <Row gutter={16}>
        {data.map((item) => {
          const posterName = item["poster-image"].split(".").slice(0, 1)[0];
          return (
            <Col span={8}>
              <img src={posters[posterName]}></img>
              <p>{item.name}</p>
            </Col>
          );
        })}
      </Row>
    </InfiniteScroll>
  );
};

export default Content;
