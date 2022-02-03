import { useEffect } from 'react'

export const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Error 404 (Not Found)'
  }, [])

  return (
    <div style={NotFoundStyle}>
      <h1>404</h1>
      <h3>Sorry, we couldn't find this page.</h3>
    </div>
  )
}

const NotFoundStyle = {
  padding: '0 2rem'
}
