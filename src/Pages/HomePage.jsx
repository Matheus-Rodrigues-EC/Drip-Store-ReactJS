import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "antd";

import * as Constants from '../Utils/Constants';

import Gallery from "../Components/Gallery";
import SectionDiv from "../Components/Section";
import ProductListing from "../Components/ProductListing";
import Footer from "../Components/Footer";


const HomePage = () => {

  return (
    <Container>
      <Gallery images={Constants?.HomeSlide} Width={'1440px'} Height={'681'} Radius={'15px'} />

      <SectionDiv title={'Coleções em destaque'} titleAlign={'center'}>
        <>
          <Col>
            <Image
              preview={false}
              style={{ margin: 'auto' }}
              src="/collection-1.png"
            />
          </Col>
          <Col>
            <Image
              preview={false}
              style={{ margin: 'auto' }}
              src="/collection-2.png"
            />
          </Col>
          <Col>
            <Image
              preview={false}
              style={{ margin: 'auto' }}
              src="/collection-3.png"
            />
          </Col>
        </>
      </SectionDiv>
      <SectionDiv  title={'Produtos em alta'} titleAlign={'left'} >
        <ProductListing products={Constants?.TrendingProducts} />
      </SectionDiv>
      <Footer />

    </Container>
  )

}

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`