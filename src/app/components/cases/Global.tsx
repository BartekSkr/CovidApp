import './Cases.scss';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Spinner } from '../ui/common/Spinner/Spinner';
import { dataFormat } from '../../helpers/dataServices';
import { fetchGlobalData } from '../../helpers/apiServices';
import { GlobalDataInterface } from '../../interfaces/dataInterfaces';

export const Global: React.FC = () => {
  const [globalData, setGlobalData] = useState<
    GlobalDataInterface['globalData']
  >({
    cases: 0,
    deaths: 0,
    recovered: 0,
    todayCases: 0,
    todayDeaths: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchGlobalData(setLoading, setGlobalData);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <main className='global'>
        <h3>
          <FontAwesomeIcon icon={faGlobe} /> WORLD
        </h3>
        <h4>Today's cases</h4>
        <p>{dataFormat(globalData.todayCases)}</p>
        <h4>Today's deaths</h4>
        <p>{dataFormat(globalData.todayDeaths)}</p>
        <h4>Total cases:</h4>
        <p>{dataFormat(globalData.cases)}</p>
        <h4>Total deaths:</h4>
        <p>{dataFormat(globalData.deaths)}</p>
        <h4>Total recovered:</h4>
        <p>{dataFormat(globalData.recovered)}</p>
      </main>
    );
  }
};
