import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { DataFormat } from './Helpers'

export const Country = () => {
  const [data, setData] = useState([])
  const [countries] = useState([{ name: 'Poland' }, { name: 'USA' }, { name: 'Germany' }, { name: 'Spain' }, { name: 'UK' }, { name: 'Belgium' }, { name: 'Canada' }, { name: 'Czechia' }])

  useEffect(() => {
    axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${countries[0].name}`)
      .then(res => {
        setData(res.data)
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

  return (
    <div className='country'>
      <h3><FontAwesomeIcon icon={faFlag} /> <Select /></h3>
      <h4>Today cases:</h4>
      <p>{DataFormat(data.todayCases)}</p>
      <h4>Today deaths:</h4>
      <p>{DataFormat(data.todayDeaths)}</p>
      <h4>Overall cases:</h4>
      <p>{DataFormat(data.cases)}</p>
      <h4>Overall deaths:</h4>
      <p>{DataFormat(data.deaths)}</p>
      <h4>Overall recovered:</h4>
      <p>{DataFormat(data.recovered)}</p>
    </div>
  )
}
