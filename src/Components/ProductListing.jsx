import React from "react";
import styled from "styled-components";
import { Row, Col, List } from "antd";

import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {

  return (
    <Container>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <ProductCard image={item?.image} name={item?.name} price={item?.price} priceDiscount={item?.priceDiscount}>ProductCard content</ProductCard>
          </List.Item>
        )}
      />

    </Container>
  )
}

export default ProductListing;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  position: relative;
  box-sizing: border-box;
`