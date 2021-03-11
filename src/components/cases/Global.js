import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Spinner } from '../layout/Spinner'

export const Global = ({ icon }) => {
  let [globalData, setGlobalData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://coronavirus-19-api.herokuapp.com/all')
      .then(res => {
        setGlobalData(res.data)

        setLoading(false)
      }).catch(err => {
        console.log(err)
    })
  }, [])

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className='world'>
        <h3>{icon} WORLD</h3>
          <h4>Overall cases:</h4>
          <p>{[globalData.cases].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
          <h4>Overall deaths:</h4>
          <p>{[globalData.deaths].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
          <h4>Overall recovered:</h4>
          <p>{[globalData.recovered].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
      </div>
    )
  }
}

Global.defaultProps = {
  icon: <FontAwesomeIcon icon={faGlobe} />
}
