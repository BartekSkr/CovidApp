import { SelectProps } from './types';

export const Select: React.FC<SelectProps> = ({
  data,
  countries,
  selectAction,
}) => {
  return (
    <select
      className="h-6 min-w-rem-9 rounded-md text-slate-300 bg-black cursor-pointer outline-none indent-2 ml-1 border-2"
      value={data.country}
      onChange={selectAction}
    >
      {countries.map((country) => (
        <option key={`key-${country}`} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};
