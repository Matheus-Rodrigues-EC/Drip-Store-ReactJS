import React from "react";
import styled from "styled-components";

const Logo = (Data) => {

  const { logoImage } = Data;

  return (
    <RenderLogo src={logoImage} />
  )
}

export default Logo;

const RenderLogo = styled.img`
  width: 253px;
  height: 44px;
`