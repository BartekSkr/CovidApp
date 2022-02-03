import { useEffect } from 'react'

export const About = () => {
  useEffect(() => {
    document.title = 'CovidApp - About'
  }, [])

  return (
    <div>
      <h1 style={ParagraphStyle}>About this App</h1>
      <p style={ParagraphStyle}>The application presents cases of covid disease in individual countries as well as in the world in general.</p>
      <p style={ParagraphStyle}>App has been created with <a style={ATagStyle} target='blank' href='https://create-react-app.dev/docs/getting-started'> React.js. and TypeScript. </a></p>
      <p style={ParagraphStyle}>API used in this app is from <a style={ATagStyle} target='blank' href="https://github.com/javieraviles/covidAPI">COVID API.</a></p>
    </div>
  )
}

const ParagraphStyle = {
  marginBottom: '1rem',
  padding: '0 1rem'
}

const ATagStyle = {
  color: 'whitesmoke',
}
