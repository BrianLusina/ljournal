import getUnixTime from 'date-fns/getUnixTime';

/**
 * Gets the time in 24 hours
 * @returns {String} time in 24hour format
 */
export const getTime24Hours = (): string => {
  const now = new Date(Date.now());
  let mins: number | string = now.getMinutes();
  let hours: number | string = now.getHours();

  if (mins < 10) {
    mins = `0${mins}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${mins}`;
};

/**
 * Gets the time in 12 hour format
 * @returns {String} time in 12 hour format
 */
export const getTime12hours = (): string => {
  const now = new Date(Date.now());

  let minutes: number | string = now.getMinutes();
  let hours: number | string = now.getHours();

  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;

  // the hour '0' should be 12
  hours = hours || '12';

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}${ampm}`;
};

export const unixTimeStamp = (date: Date): number => getUnixTime(date);

/**
 * Returns the duration between 2 time periods
 * @param {String} startTime
 * @param {String} endTime
 * @param {String} dateFormat Optional time format
 * @returns {String} duration in human readable format
 * */
export const getDuration = (startTime: string, endTime: string): string => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const diff = endDate.getTime() - startDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  const duration = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  return duration;
};
