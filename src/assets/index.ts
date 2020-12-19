
const markdownFiles = require.context('./markdowns', true, /\.md$/);
interface MarkdownList  {
  [key: string] : string; 
};
const markdowns : MarkdownList = {}
markdownFiles.keys().forEach((v) => {
  const baseName = v.replace('.md', '')
  markdowns[baseName.substring(2)] = markdownFiles(v)
})

export default markdowns