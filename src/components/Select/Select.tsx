import './Select.scss';
import { SelectProps } from './types';

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
