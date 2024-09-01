<template>
  <div>
    {{ (calendarStore.calendar || []).filter((s) => s.schedule.length > 0) }}
  </div>
</template>

<script lang="ts" setup>
import { calendarStore } from "~/src/store/calendarStore";
</script>
