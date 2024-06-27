/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_FORMAT0 = 'YYYYMMDD';

export function formatToDateTime(
  date: dayjs.Dayjs | Date | undefined = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format);
}

export function formatToDate(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_FORMAT,
): string {
  return dayjs(date).format(format);
}

export function formatNo_Date(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_FORMAT0,
): string {
  return dayjs(date).format(format);
}
export const dateUtil = dayjs;
