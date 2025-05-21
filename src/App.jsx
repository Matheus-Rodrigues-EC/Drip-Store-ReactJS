import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React, { useEffect } from 'react'
// import axios from "axios";
import styled from "styled-components";
import "./ResetStyles.less";



// import gallery1 from '../public/collection-1.png'
// import gallery2 from '../public/collection-2.png'
// import gallery3 from '../public/collection-3.png'

import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import SectionDiv from "./Components/Section";
import ProductCard from "./Components/ProductCard";
import ProductListing from "./Components/ProductListing";
import Footer from "./Components/Footer";


// const data = [
//   {
//     name: "Nome do produto 1",
//     image: foto1,
//     price: 200,
//     priceDiscount: 149.9
//   },
// ]

// const images = [{image: gallery1}, {image: gallery2}, {image: gallery3}, ]


function App() {

  const testLink = { text: 'Link de teste', href: 'www.google.com' }

  return (
    <Container>
      <Header />
      <SectionDiv title={'Title Text'} titleAlign={'center'} link={testLink} children={''} />

      {/* <ProductCard image={''} name={"Teste de Produto"} price={250.500} priceDiscount={200} /> */}
      {/* <ProductListing products={data} /> */}

      {/* <Gallery images={images} Width={'750px'} Height={'750px'} Radius={'15px'} /> */}

      <>
        {/* <BrowserRouter>
          <Routes>

          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> */}
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