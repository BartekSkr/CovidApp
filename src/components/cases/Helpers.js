//  function adds space every 3 digits
export const DataFormat = (number) => [number].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
