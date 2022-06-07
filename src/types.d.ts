export interface GlobalDataInterface {
  globalData: {
    cases: number;
    deaths: number;
    recovered: number;
    todayCases: number;
    todayDeaths: number;
  };
}

export interface CountryDataInterface {
  countryData: {
    country: string;
    todayCases: number;
    todayDeaths: number;
    cases: number;
    deaths: number;
    recovered: number;
  };
}