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
