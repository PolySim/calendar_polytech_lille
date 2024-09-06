<template>
  <main class="flex flex-1 max-h-screen overflow-y-auto">
    <aside class="min-w-12 border-r border-solid border-black h-fit">
      <div
        v-for="(schedule, i) in [
          { start: 0, end: 15 },
          ...generateHourInterval(),
        ]"
        :key="schedule.start"
        :class="cn('p-2 pr-0 w-full text-center h-10 -translate-y-1/2', {})"
      >
        <p v-if="i > 0 && schedule.start % 60 === 0">
          {{ Math.round(schedule.start / 60) }}h
        </p>
      </div>
    </aside>
    <div class="flex flex-1 max-w-full h-fit overflow-x-auto">
      <Day
        v-for="(day, i) in calendarStore.calendar"
        :key="`${day.date}-${calendarStore.group.key}`"
        :day="day"
        :index="i"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { calendarStore } from "~/src/store/calendarStore";
import { cn } from "~/src/utils/cn";
import Day from "~/src/components/calendar/day.vue";
import { generateHourInterval } from "~/src/utils/calendar";
</script>
