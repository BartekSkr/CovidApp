import axios from 'axios';
import { ChangeEvent } from 'react';

export const handleOnChange = (
  e: ChangeEvent<HTMLSelectElement>,
  setCountryData: (
    value: React.SetStateAction<{
      country: string;
      todayCases: number;
      todayDeaths: number;
      cases: number;
      deaths: number;
      recovered: number;
    }>
  ) => void
) => {
  axios
    .get(`https://coronavirus-19-api.herokuapp.com/countries/${e.target.value}`)
    .then((res) => {
      setCountryData(res.data);
    })
    .catch((error: Error) => console.error(error));
};
