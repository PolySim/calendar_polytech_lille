<template>
  <div
    :class="
      cn('bg-red-100 w-30 h-full min-w-40', {
        'bg-red-200': index % 2 === 0,
      })
    "
  >
    <div class="w-full text-center p-2 h-10">
      {{ isoToFrench(day.date) }}
    </div>
    <div
      v-for="schedule in interval"
      :key="schedule.start"
      :class="
        cn('p-2 w-full text-center border-t border-solid border-red-100 h-10', {
          'border-red-50': index % 2 !== 0,
        })
      "
    ></div>
  </div>
</template>

<script lang="ts" setup>
import type { DayType } from "~/src/types/calendar.type";
import { cn } from "~/src/utils/cn";
import { generateHourInterval, isoToFrench } from "../../utils/calendar";

const interval = ref(generateHourInterval());

const props = defineProps<{
  day: DayType;
  index: number;
}>();
</script>
