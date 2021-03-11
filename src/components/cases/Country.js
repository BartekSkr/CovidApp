import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

export const Country = ({ icon }) => {
  const [data, setData] = useState([])

  // useEffect(() => {}, [])

  const handleChange = (event) => {
    console.log(`handleChange: ${event.target.value}`)
    axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${event.target.value}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  }

  const Select = () => {
    return (
      <select className='select' value={data.country} onChange={handleChange}>
        <option>Choose a country...</option>
        <option>Poland</option>
        <option>USA</option>
        <option>Germany</option>
        <option>Spain</option>
        <option>UK</option>
        <option>Italy</option>
        <option>France</option>
        <option>Czechia</option>
      </select>
    )
  }

  return (
    <div className='country'>
      <h3>{icon} <Select /></h3>
      <h4>Today cases:</h4>
      <p>{[data.todayCases].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
      <h4>Today deaths:</h4>
      <p>{[data.todayDeaths].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
      <h4>Overall cases:</h4>
      <p>{[data.cases].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
      <h4>Overall deaths:</h4>
      <p>{[data.deaths].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
      <h4>Overall recovered:</h4>
      <p>{[data.recovered].toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}</p>
    </div>
  )
}

Country.defaultProps = {
  icon: <FontAwesomeIcon icon={faFlag} />
}
