import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Typography } from "antd";


const SectionDiv = ({ title, titleAlign, link, children }) => {


  return (
    <Container>
      <Row justify={(titleAlign === 'center' ? 'center' : 'start') || 'start'} >
        <Typography.Title>{title}</Typography.Title>
        {link?.text &&
          <Typography.Link as={Link} to={`/${link?.href}`} className="linkSection">
            {link?.text}
          </Typography.Link>
        }
      </Row>
      {children && (
        <Row justify={'space-between'}>
          {children}
        </Row>
      )}
    </Container>
  )
}

export default SectionDiv;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  padding: 0 100px;
  box-sizing: border-box;
`