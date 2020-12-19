import React, { FC } from 'react';
import { Row, Col } from 'antd'
import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import Title from 'antd/lib/typography/Title';
const ProfileHeader: FC = props => (
  <div>
    <Row justify='center' style={{ paddingBottom: "20px" }}>
      <Col><SkeletonAvatar size={170} /></Col>
    </Row>

    <Row justify="center"><Title level={1}>Chi Zhang</Title></Row>
    <Row justify="center"><Title level={4} type='secondary' >B CompSci(AI)/B Commerce(FinTech)</Title></Row>
    <Row justify="center"><Title level={4} type='secondary' >UNSW</Title></Row>
  </div>
);
export default ProfileHeader;
