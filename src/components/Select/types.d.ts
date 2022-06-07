export interface SelectProps {
  data: CountryDataInterface['countryData'];
  countries: string[];
  selectAction: (e: ChangeEvent<HTMLSelectElement>) => void;
}