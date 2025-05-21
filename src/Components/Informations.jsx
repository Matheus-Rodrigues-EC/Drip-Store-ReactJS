import { Row, Col, Typography } from 'antd';

import * as Colors from '../Utils/Constants';

const Informations = (props) => {
  const { data } = props;

  return (
    <section>
      <Col>
        <Row>
          <Typography.Title level={5}
            style={{ color: Colors.white, fontFamily: 'Inter', cursor: 'pointer' }}
          >
            {data.title}
          </Typography.Title>
        </Row>
        {data?.informations?.map((info) => {
          return (
            <Row key={info?.text}>
              <Typography.Paragraph
                style={{ color: Colors.white, fontFamily: 'Inter', cursor: 'pointer' }}
              >
                {info?.text}
              </Typography.Paragraph>
            </Row>
          )
        })}

      </Col>
    </section>
  )
}

export default Informations;