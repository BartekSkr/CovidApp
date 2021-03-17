import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Spinner } from '../layout/Spinner'
import { dataFormat } from './helpers'

export const Global = () => {
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
        <h3> <FontAwesomeIcon icon={faGlobe} /> WORLD</h3>
          <h4>Total cases:</h4>
          <p>{dataFormat(globalData.cases)}</p>
          <h4>Total deaths:</h4>
          <p>{dataFormat(globalData.deaths)}</p>
          <h4>Total recovered:</h4>
          <p>{dataFormat(globalData.recovered)}</p>
      </div>
    )
  }
}
