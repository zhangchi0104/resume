import React from 'react';
import { Layout, Menu, Row, Col, Skeleton } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import ProfileHeader from './Profile';
const { Sider } = Layout;

class LeftPanel extends React.Component {
	render() {
		return (
			<Sider
				style={{ minHeight: "100vh" }}
				width="50% "
				breakpoint="lg"
				collapsedWidth="0"
				theme="light"
			>
				<div style={{margin:"10px 40px"}}>
				<ProfileHeader />
				</div>
				<Menu theme="light">
					<Menu.Item style={{ textAlign: "right", fontSize: "30px" }}>Option 1</Menu.Item>
					<Menu.Item style={{ textAlign: "right", fontSize: "30px" }}>Option 2</Menu.Item>
					<Menu.Item style={{ textAlign: "right", fontSize: "30px" }}>Option 3</Menu.Item>
					<Menu.Item style={{ textAlign: "right", fontSize: "30px" }}>Option 4</Menu.Item>
					<Menu.Item style={{ textAlign: "right", fontSize: "30px" }}>Option 5</Menu.Item>
				</Menu>

				<Row justify="end" style={{ marginTop: "15px" }}>
					<Col style={{ marginRight: "20px" }}>
						<GithubOutlined style={{ fontSize: "25px" }} />
					</Col>
					<Col style={{ marginRight: "20px" }}>
						<GithubOutlined style={{ fontSize: "25px" }} />
					</Col>
				</Row>
			</Sider>
		)
	}
}

export default LeftPanel; 