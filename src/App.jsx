import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React, { useEffect } from 'react'
// import axios from "axios";
import styled from "styled-components";
import "./ResetStyles.less";


import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {

  return (
    <Container>
      <Header />

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