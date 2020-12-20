import React, { FC, useEffect, useState } from 'react';
import './RightPane.less';
import { AppState } from '../store/typings'
import ReactMarkdown from 'react-markdown';
import markdowns from '../assets'
import { useSelector } from 'react-redux';
import { Typography, Divider } from 'antd';
const RightPane: FC = () => {
  return (
    <Content>
      <Markdown />
    </Content>
  )
}
const renders = {
  "heading": (props: any) => (<Typography.Title level={props.level}> {props.children} </Typography.Title>),
  "text": (props: any) => (<Typography.Text children={props.children} />),
  "paragraph": (props: any) => (<Typography.Paragraph children={props.children} />),
  "strong": (props: any) => (<Typography.Text strong children={props.children} />),
  'thematicBreak': (props: any) => (<Divider />),
  "link": (props: any) => (<Typography.Link children={props.children} href={props.href} />)
}
const Content: FC = (props: any) => (
  <div className="resume-content">
    {props.children}
  </div>
)

const Markdown: FC = () => {
  const activeMenuTab = useSelector((state: AppState) => state.activeMenuTab)
  const pathToMd = markdowns[activeMenuTab]
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(pathToMd)
      setMarkdown(await resp.text())
    }
    fetchData()
  }, [pathToMd])
  return (
    <ReactMarkdown children={markdown} renderers={renders} />
  )
}


export default RightPane;