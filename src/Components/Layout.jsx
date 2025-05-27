import React from "react";
import styled from "styled-components";
import { Row } from "antd";

import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ children }) => {

  return (
    <Container>
      <Header />
      <BoxContent>
        {children}
      </BoxContent>
      <Footer />
    </Container>
  )
}

export default Layout;


const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`


const BoxContent = styled.section`
  margin: 25px auto;
  padding: 0 70px;
  box-sizing: border-box;
`
