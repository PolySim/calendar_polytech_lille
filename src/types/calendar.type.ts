export type ViewType = "day" | "week";

export type ScheduleType = {
  title: string;
  description: string;
  start: string;
  end: string;
};

export type DayType = { schedule: ScheduleType[]; date: string };

export type CalendarType = DayType[];
