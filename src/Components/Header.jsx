import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Input, Button, Tabs, ConfigProvider, Badge, message } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './Styles.less'
import LogoHeader from '../assets/logo-header.svg'

import * as Colors from "../Utils/Constants";
import Logo from './Logo';
import HomePage from "../Pages/HomePage";

const onChange = key => {
  console.log(key);
};

const ItensNavigate = [
  {
    key: '1',
    label: 'Home',
    // children: <HomePage />,
  },
  {
    key: '2',
    label: 'Produtos',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Categorias',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Meus Pedidos',
    children: 'Content of Tab Pane 4',
  },
];

const Header = () => {
  const [countCart, setCountCart] = useState(3);
  const [messageApi, contextHolder] = message.useMessage();

  const info = (message) => {
    messageApi.info(`Você clicou em: ${message}`);
  };

  return (
    <ContainerHeader>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Colors.primary,
            borderRadius: 2,
            colorBgContainer: Colors.light_gray_2,
          },
        }}
      >
        <Row justify="space-between" align="middle">
          <Col span={5}>
            <Logo logoImage={LogoHeader} />
          </Col>

          <Col span={10}>
            <Input
              placeholder="Buscar produtos..."
              className="InputSearch"
              suffix={<SearchOutlined />}
            />
          </Col>

          <Col span={3}>
            <Button
              className="Button Register"
              type="icon"
              onClick={() => info('Cadastre-se')}
            >
              Cadastre-se
            </Button>
          </Col>

          <Col span={3}>
            <Button
              className="Button Login"
              onClick={() => info('Entrar')}
            >
              Entrar
            </Button>
          </Col>

          <Col span={3}>
            <Button
              type="icon"
              className="Button Cart"
              onClick={() => setCountCart((prev) => prev += 1)}
            >
              <Badge count={countCart} >
                <ShoppingCartOutlined style={{ fontSize: '36px', color: Colors.primary}} />
              </Badge>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Tabs
              type="line"
              defaultActiveKey="1"
              style={{ marginTop: '40px'}}
              items={ItensNavigate} onChange={onChange}
            />
          </Col>
        </Row>
      </ConfigProvider>
    </ContainerHeader>



  )
}

export default Header;

const ContainerHeader = styled.div`
  width: 100%;
  height: 192px;
  padding: 30px 100px;
  box-sizing: border-box;
`