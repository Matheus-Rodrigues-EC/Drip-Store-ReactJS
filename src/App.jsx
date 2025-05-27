import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React, { useEffect } from 'react'
// import axios from "axios";
import styled from "styled-components";
import "./ResetStyles.less";

import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import ProductListingPage from "./Pages/ProductListingPage";
import ProductViewPage from "./Pages/ProductViewPage";

import ProductOptions from "./Components/ProductOptions";
import BuyBox from "./Components/BuyBox";

function App() {

  return (
    <Container>
      {/* <Header /> */}

      {/* <HomePage /> */}
      {/* <SectionDiv title={'Coleções em destaque'} titleAlign={'center'} link={testLink} children={''} /> */}

      {/* <ProductCard image={''} name={"Teste de Produto"} price={250.500} priceDiscount={200} /> */}
      {/* <ProductListing products={data} /> */}

      {/* <Gallery images={images} Width={'750px'} Height={'750px'} Radius={'15px'} /> */}

      <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Layout children={<HomePage />} />} />
            <Route path="/produtos" element={<Layout children={<ProductListingPage />} />} />
            <Route path="/categorias" element={<Layout children={<ProductViewPage />} />}/>

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </>

    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`