import React from "react";
import styled from "styled-components";
import { Row } from "antd";

import Footer from "../Components/Footer";

const ProductViewPage = () => {


  return (
    <Container>
      <h1>ProductViewPage</h1>
      
      <Footer/>
    </Container>
  )

}

export default ProductViewPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`