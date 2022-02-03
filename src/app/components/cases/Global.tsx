import './Cases.scss'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Spinner } from '../ui/common/Spinner/Spinner'
import { dataFormat } from '../../helpers/helpers'

interface GlobalDataInterface {
  globalData: {
    cases: number;
    deaths: number;
    recovered: number
  }
}

export const Global: React.FC = () => {
  const [globalData, setGlobalData] = useState<GlobalDataInterface['globalData']>(
    { cases: 0, deaths: 0, recovered: 0 })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://coronavirus-19-api.herokuapp.com/all')
      .then(res => res.json())
      .then((data: GlobalDataInterface['globalData']) => {
        setGlobalData(data)
        setLoading(false)
      })
      .catch((err: Error) => console.error(err))
  }, [])

  if (loading) {
    return <Spinner />
  } else {
    return (
      <main className='global'>
        <h3><FontAwesomeIcon icon={faGlobe} /> WORLD </h3>
        <h4>Total cases:</h4>
        <p>{dataFormat(globalData.cases)}</p>
        <h4>Total deaths:</h4>
        <p>{dataFormat(globalData.deaths)}</p>
        <h4>Total recovered:</h4>
        <p>{dataFormat(globalData.recovered)}</p>
      </main>
    )
  }
}
