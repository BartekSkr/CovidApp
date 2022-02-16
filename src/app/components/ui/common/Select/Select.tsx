import './Select.scss';
import { ChangeEvent } from 'react';
import { CountryDataInterface } from '../../../../interfaces/dataInterfaces';

interface SelectProps {
  data: CountryDataInterface['countryData'];
  countries: string[];
  selectAction: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({
  data,
  countries,
  selectAction,
}) => {
  return (
    <select className='select' value={data.country} onChange={selectAction}>
      {countries.map((country) => (
        <option key={`key-${country}`} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};
