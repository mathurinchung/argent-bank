/**
 * Function to format a number with commas for thousands separators.
 *
 * @param { Number } x - The number to be formatted.
 * @returns { String } - The formatted number as a string with commas separating thousands.
 */
export const formatNumber = x => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
