import React, { FC, useEffect, useState } from 'react';
import './RightPane.less';
import { AppState } from '../store/typings'
import ReactMarkdown from 'react-markdown';
import markdowns from '../assets'
import { useSelector } from 'react-redux';
const RightPane: FC = () => {
  return (
    <Content>
      <Markdown />
    </Content>
  )
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
    <ReactMarkdown children={markdown} />
  )
}


export default RightPane;