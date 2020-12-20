import React, { FC } from 'react';
import { Row, Col, Layout } from 'antd'

import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPane'
import './App.less';

const App: FC = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Row>
      <Col xs={12} sm={11} md={10} lg={9} xl={6}><LeftPanel /></Col>
      <Col xs={12} sm={13} md={14} lg={15} xl={18}> <RightPanel />
      </Col>
    </Row>
  </Layout>
)
export default App;
