//  function adds space every 3 digits
export const dataFormat = (number) => [number].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
