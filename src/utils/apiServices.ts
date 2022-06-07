import axios from 'axios';
import { CountryDataInterface } from '../types';

//  fetch global data
export const fetchGlobalData = (
  setLoading: (isLoading: boolean) => void,
  setGlobalData: (
    value: React.SetStateAction<{
      cases: number;
      deaths: number;
      recovered: number;
      todayCases: number;
      todayDeaths: number;
    }>
  ) => void
) => {
  setLoading(true);
  axios
    .get(`https://coronavirus-19-api.herokuapp.com/countries/world`)
    .then((res) => {
      setGlobalData(res.data);
      setLoading(false);
    })
    .catch((error: Error) => console.error(error));
};

//  fetch data for individual country
export const fetchCountryData = (
  setLoading: (isLoading: boolean) => void,
  setCountries: React.Dispatch<React.SetStateAction<string[]>>,
  setCountryData: React.Dispatch<
    React.SetStateAction<{
      country: string;
      todayCases: number;
      todayDeaths: number;
      cases: number;
      deaths: number;
      recovered: number;
    }>
  >
) => {
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
};
