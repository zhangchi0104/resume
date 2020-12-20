import React, { FC } from 'react';
import { Row, Col } from 'antd'
import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import { Typography } from 'antd';
const { Title, Text } = Typography
const ProfileHeader: FC = () => (
  <div>
    <Row justify='center' style={{ paddingBottom: "20px" }}>
      <Col><SkeletonAvatar size={170} /></Col>
    </Row>
    <Row justify="center"><Title level={2}>Chi Zhang</Title></Row>
    <Row justify="center"><Text>B CompSci(AI)/B Commerce(FinTech)</Text></Row>
    <Row justify="center"><Text type='secondary' >UNSW</Text></Row>
  </div>
);
export default ProfileHeader;
