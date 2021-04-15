import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { dataFormat } from '../utils/helpers'
import { Spinner } from '../layout/Spinner'

export const Country = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [countries] = useState([
    { name: 'Poland' },
    { name: 'Austria' },
    { name: 'Belgium' },
    { name: 'Canada' },
    { name: 'Croatia' },
    { name: 'Czechia' },
    { name: 'Germany' },
    { name: 'Israel' },
    { name: 'Japan' },
    { name: 'Spain' },
    { name: 'Switzerland' },
    { name: 'UK' },
    { name: 'USA' }
  ])

  useEffect(() => {
    setLoading(true)
    axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${countries[0].name}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [countries])

  const handleChange = (event) => {
    axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${event.target.value}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
    })
  }

  const Select = () => {
    return (
      <select className='select' value={data.country} onChange={handleChange}>
        {countries.map(country =>
          (<option key={`key-${country.name}`} value={country.name}>{country.name}</option>))}
      </select>
    )
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className='country'>
        <h3><FontAwesomeIcon icon={faFlag} /> <Select /></h3>
        <h4>Today's cases:</h4>
        <p>{dataFormat(data.todayCases)}</p>
        <h4>Today's deaths:</h4>
        <p>{dataFormat(data.todayDeaths)}</p>
        <h4>Total cases:</h4>
        <p>{dataFormat(data.cases)}</p>
        <h4>Total deaths:</h4>
        <p>{dataFormat(data.deaths)}</p>
        <h4>Total recovered:</h4>
        <p>{dataFormat(data.recovered)}</p>
      </div>
    )
  }
}
