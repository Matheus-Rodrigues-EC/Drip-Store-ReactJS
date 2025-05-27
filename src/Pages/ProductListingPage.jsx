import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Select, Typography, Divider } from "antd";

import * as Constants from "../Utils/Constants";
import FilterGroup from "../Components/FilterGroup";
import SectionDiv from "../Components/Section";
import ProductListing from "../Components/ProductListing";


const ProductListingPage = () => {
  const [finded, setFinded] = useState(0)

  useEffect(() => {
    setFinded(1)
  }, []);

  return (
    <Container>
      <Row className="BoxContent">
        <Col span={4}>
          <Row>
            <Col>
              <Select
                allowClear
                defaultValue={1}
                placeholder="Selecione a Ordenação"
                prefix={<Typography.Text strong >Ordenar por: </Typography.Text>}
                className="SelectOrdenation"
              >
                {Constants.FilterOptions.map((item) => (
                  <Select.Option key={item?.id} value={item?.id}>
                    {item?.label}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>

          <Row>
            <Col className="FilterBox">
              <Row justify='center'>
                <Typography.Title level={5}>Filtrar por</Typography.Title>
              </Row>
              <Divider style={{ borderColor: Constants.light_gray_2 }}></Divider>
              <Row>
                <FilterGroup title={'Marka'} inputType ={'checkbox'} ListOptions={Constants.Marka} />
                <FilterGroup title={'Categoria'} inputType ={'checkbox'} ListOptions={Constants.Categoria} />
                <FilterGroup title={'Gênero'} inputType ={'checkbox'} ListOptions={Constants.Genero} />
                <FilterGroup title={'Estado'} inputType ={'radio'} ListOptions={Constants.Estado} />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={18}>
          <SectionDiv title={`Resultados encontrados: ${finded} produtos`} titleAlign={'left'} >
            <ProductListing products={Constants.TrendingProducts} style={{ padding: 0}} />
          </SectionDiv>
        </Col>
      </Row>
    </Container>
  )

}

export default ProductListingPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .BoxContent {
    margin: 25px 0;
    box-sizing: border-box;
  }
`