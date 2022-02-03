import './Cases.scss'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, useEffect, useState } from 'react'
import { Spinner } from '../ui/common/Spinner/Spinner'
import { dataFormat } from '../../helpers/helpers'

interface CountryDataInterface{
  countryData: {
    country: string,
    todayCases: number,
    todayDeaths: number,
    cases: number,
    deaths: number,
    recovered: number
  }
}

export const Country: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryDataInterface['countryData']>(
    { country: '', todayCases: 0, todayDeaths: 0, cases: 0, deaths: 0, recovered: 0 })
  const [loading, setLoading] = useState<boolean>(false)
  const [countries] = useState<{name: string}[]>([
    { name: 'Poland' },
    { name: 'Austria' },
    { name: 'Belgium' },
    { name: 'Canada' },
    { name: 'Croatia' },
    { name: 'Czechia' },
    { name: 'Denmark' },
    { name: 'Germany' },
    { name: 'Israel' },
    { name: 'Japan' },
    { name: 'Spain' },
    { name: 'Switzerland' },
    { name: 'UK' },
    { name: 'USA' },
  ])

  useEffect(() => {
    setLoading(true)
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countries[0].name}`)
      .then(res => res.json())
      .then((data: CountryDataInterface['countryData']) => {
        setCountryData(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [countries])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${e.target.value}`)
      .then(res => res.json())
      .then((data: CountryDataInterface['countryData']) => {
        setCountryData(data)
      })
      .catch((err: Error) => console.error(err))
  }

  const Select = () => {
    return (
      <select className="select" value={countryData.country} onChange={handleChange}>
        {countries.map(country => (
          <option key={`key-${country.name}`} value={country.name}>{country.name}</option>
        ))}
      </select>
    )
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <main className='country'>
        <h3><FontAwesomeIcon icon={faFlag} /> <Select /></h3>
        <h4>Today's cases:</h4>
        <p>{dataFormat(countryData.todayCases)}</p>
        <h4>Today's deaths:</h4>
        <p>{dataFormat(countryData.todayDeaths)}</p>
        <h4>Total cases:</h4>
        <p>{dataFormat(countryData.cases)}</p>
        <h4>Total deaths:</h4>
        <p>{dataFormat(countryData.deaths)}</p>
        <h4>Total recovered:</h4>
        <p>{dataFormat(countryData.recovered)}</p>
      </main>
    )
  }
}
