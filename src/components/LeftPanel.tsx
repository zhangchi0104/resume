import React, { useEffect } from 'react';
import { Menu, Row, Col } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import ProfileHeader from './Profile';
import markdowns from '../assets/index';
import './LeftPanel.less'
import { useDispatch, useSelector } from 'react-redux';
import { AppState, UPDATE_MENU_ITEM } from '../store/typings';
import { AppDispatch } from '../store';

const LeftPane: React.FC = () => {
  const sections = useSelector((state: AppState) => state.sections);
  const activeSection = useSelector((state: AppState) => state.activeMenuTab);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    console.log(markdowns)
  })
  return (
    <div className='left-pane pane-padding'>
      <div style={{ display: "block" }}>
        <div style={{ marginBottom: "10px" }}>
          <ProfileHeader />
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={[activeSection]}
          style={{ border: "unset", background: '#adecf4' }}
          onClick={(params) => dispatch({ type: UPDATE_MENU_ITEM, payload: params.key })}
        >
          {
            sections.map(
              (v, _) => (
                <Menu.Item style={{
                  textAlign: "center",
                  fontSize: "30px",
                  margin: "15px 0"
                }} key={v}>{v}</Menu.Item>
              )
            )
          }
        </Menu>
        <Row justify="space-around" style={{ width: "180px ", margin: "auto" }}>
          <Col span={6} style={{ textAlign: "center" }}>
            <GithubOutlined style={{ fontSize: "25px" }} />
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <MailOutlined style={{ fontSize: "25px", textAlign: "center" }} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LeftPane; 