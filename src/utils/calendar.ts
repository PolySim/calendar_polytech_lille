import type { CalendarType, ScheduleType } from "~/src/types/calendar.type";

export const isBissextile = () => {
  const year = new Date().getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const generateCalendar: () => CalendarType = () => {
  const year = new Date().getFullYear();
  return new Array(isBissextile() ? 366 : 365).fill(0).map((_, index) => ({
    schedule: [],
    date: new Date(year, 0, index + 2)
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", ""),
  }));
};

export const initSchedules = (
  calendar: CalendarType,
  schedules: ScheduleType[],
) =>
  calendar.map((day) => ({
    ...day,
    schedule: schedules.filter((schedule) =>
      schedule.start.startsWith(day.date),
    ),
  }));

export const getSchedules = async (promo: string) => {
  return await useFetch(
    `https://applications.polytech-lille.fr/sos/wsADE_events.php?serveurade=planning-2024&numprojet=0&promo=${promo}`,
    {
      mode: "no-cors",
      lazy: true,
      accept: "application/json, text/javascript, */*; q=0.01",
    },
  );
};

export const isoToFrench = (input: string) => {
  const year = parseInt(input.substring(0, 4), 10);
  const month = parseInt(input.substring(4, 6), 10) - 1;
  const day = parseInt(input.substring(6, 8), 10);
  const date = new Date(year, month, day);

  const daysOfWeek = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate().toString();

  return `${dayOfWeek} ${dayOfMonth}`;
};

export const generateHourInterval: () => {
  start: number;
  end: number;
}[] = () => {
  const MINUTES_INTERVAL = 15;
  const MINUTES_IN_DAY = 60 * 24;

  return new Array(MINUTES_IN_DAY / MINUTES_INTERVAL)
    .fill(0)
    .map((_, index) => ({
      start: index * MINUTES_INTERVAL,
      end: index * MINUTES_INTERVAL + MINUTES_INTERVAL,
    }));
};
