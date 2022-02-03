//  function adds space every 3 digits
export const dataFormat = (num: number) => [num].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')