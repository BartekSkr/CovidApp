import './Cases.scss';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useEffect, useState } from 'react';
import { Spinner } from '../ui/common/Spinner/Spinner';
import { dataFormat } from '../../helpers/helpers';
import axios from 'axios';

interface CountryDataInterface {
  countryData: {
    country: string;
    todayCases: number;
    todayDeaths: number;
    cases: number;
    deaths: number;
    recovered: number;
  };
}

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
    setLoading(true);
    axios
      .all([
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries`),
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/usa`),
      ])
      .then((res) => {
        setCountries(
          res[0].data
            .splice(1)
            .map(
              (country: CountryDataInterface['countryData']) => country.country
            )
        );
        setCountryData(res[1].data);
        setLoading(false);
      })
      .catch((error: Error) => console.error(error));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    axios
      .get(
        `https://coronavirus-19-api.herokuapp.com/countries/${e.target.value}`
      )
      .then((res) => {
        setCountryData(res.data);
      })
      .catch((error: Error) => console.error(error));
  };

  const Select = () => {
    return (
      <select
        className='select'
        value={countryData.country}
        onChange={handleChange}
      >
        {countries.map((country) => (
          <option key={`key-${country}`} value={country}>
            {country}
          </option>
        ))}
      </select>
    );
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <main className='country'>
        <h3>
          <FontAwesomeIcon icon={faFlag} /> <Select />
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
