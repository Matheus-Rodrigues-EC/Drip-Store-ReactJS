import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import * as Constants from '../Utils/Constants';
import Gallery from "../Components/Gallery";
import ProductOptions from "../Components/ProductOptions";
import BuyBox from "../Components/BuyBox";
import SectionDiv from "../Components/Section";
import ProductListing from "../Components/ProductListing";

const ProductViewPage = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {


  const text = ["39", "41", "42", "43"];
  const colors = ["#F00", "#0F0", "#00F", "#F0F"];

  return (
    <Container>
      <Row>
        <Col span={12}>
          <Gallery images={Constants.ProductsImages} Width={'700px'} Height={'570px'} Radius={'4px'} />
        </Col>
        <Col span={10} offset={1}>
          <BuyBox
            name={'Nome do Produto'}
            reference={'Referencia de teste'}
            stars={2.2}
            rating={'90 avaliações'}
            price={250.0}
            priceDiscount={''}
            description={'Teste de descrição para produto da Drip-Store'}
            children={
              <>
                <ProductOptions options={text} radius={'5px'} shape={'square'} type={'text'} />
                <ProductOptions options={colors} radius={'5px'} shape={'square'} type={'color'} />
              </>
            }
          />
        </Col>
      </Row>
      <Row style={{ position: 'relative'}}>
        <SectionDiv 
          title={'Produtos recomendados'} 
          titleAlign={'left'} 
          link={
            {text: "Ver todos", href: "/produtos"}
          }
          >
          <ProductListing products={Constants.RecommendedProducts} />
        </SectionDiv>
      </Row>
    </Container>
  )

}

export default ProductViewPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`