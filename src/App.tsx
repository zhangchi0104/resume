import React, { FC } from 'react';
import { Layout } from 'antd'
import LeftPanel from './components/LeftPanel'
import './App.css';

const App: FC = () => (
  <Layout >
    <LeftPanel/>
  </Layout>
)
export default App;
