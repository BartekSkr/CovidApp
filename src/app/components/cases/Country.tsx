import './Cases.scss';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useEffect, useState } from 'react';
import { Spinner } from '../ui/common/Spinner/Spinner';
import { dataFormat } from '../../helpers/dataServices';
import { CountryDataInterface } from '../../interfaces/dataInterfaces';
import { Select } from '../ui/common/Select/Select';
import { handleOnChange } from '../../helpers/selectServices';
import { fetchCountryData } from '../../helpers/apiServices';

export const Country: React.FC = () => {
  const [countryData, setCountryData] = useState<
    CountryDataInterface['countryData']
  >({
    country: '',
    todayCases: 0,
    todayDeaths: 0,
    cases: 0,
    deaths: 0,
    recovered: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    fetchCountryData(setLoading, setCountries, setCountryData);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <main className='country'>
        <h3>
          <FontAwesomeIcon icon={faFlag} />{' '}
          <Select
            data={countryData}
            countries={countries}
            selectAction={(e: ChangeEvent<HTMLSelectElement>) =>
              handleOnChange(e, setCountryData)
            }
          />
        </h3>
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
    );
  }
};
