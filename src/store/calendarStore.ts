import type { GroupType } from "~/src/types/group.type";
import type { CalendarType, ViewType } from "~/src/types/calendar.type";
import { generateCalendar } from "~/src/utils/calendar";

type CalendarStore = {
  group: GroupType;
  viewType: ViewType;
  changeViewType: (viewType: ViewType) => void;
  currentStart: string;
  calendar: CalendarType;
};

export const calendarStore = reactive<CalendarStore>({
  group: {
    key: 0,
    name: "",
  },
  viewType: "day",
  changeViewType(viewType: ViewType) {
    this.viewType = viewType;
  },
  currentStart: new Date().toISOString().slice(0, 10).replaceAll("-", ""),
  calendar: generateCalendar(),
});
