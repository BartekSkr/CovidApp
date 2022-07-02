import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { dataFormat } from '../../utils/dataServices';
import { fetchGlobalData } from '../../utils/apiServices';
import { GlobalDataInterface } from '../../types';

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
      <main className="border p-4 h-300 mx-auto mb-8 md:w-percent-48">
        <h3 className="relative">
          <FontAwesomeIcon icon={faGlobe} /> WORLD
        </h3>
        <h4>Today's cases</h4>
        <p className="ml-3">{dataFormat(globalData.todayCases)}</p>
        <h4>Today's deaths</h4>
        <p className="ml-3">{dataFormat(globalData.todayDeaths)}</p>
        <h4>Total cases:</h4>
        <p className="ml-3">{dataFormat(globalData.cases)}</p>
        <h4>Total deaths:</h4>
        <p className="ml-3">{dataFormat(globalData.deaths)}</p>
        <h4>Total recovered:</h4>
        <p className="ml-3">{dataFormat(globalData.recovered)}</p>
      </main>
    );
  }
};
