<template>
  <div class="flex flex-col h-screen w-screen">
    <Header />
    <div>{{ schedules?.length || -1 }}</div>
    <Calendar class="my-12" />
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import Header from "~/src/components/header.vue";
import Calendar from "~/src/components/calendar/calendar.vue";
import { getSchedules, initSchedules } from "~/src/utils/calendar";
import { calendarStore } from "~/src/store/calendarStore";
import { getGroups } from "~/src/utils/groups";

const route = useRoute();
const id = computed(() => route.params.id);

const { data } = await getGroups();
const group = computed(() => data.value?.find((g) => g.name === id.value));

const { data: dataSchedules } = await getSchedules(group.value.key);
const schedules = computed(() => JSON.parse(dataSchedules.value || "[]"));

watch(
  schedules,
  () => {
    if (group.value) {
      calendarStore.group = group.value;
      calendarStore.calendar = initSchedules(
        calendarStore.calendar,
        schedules.value || [],
      );
    }
  },
  { immediate: true },
);
</script>
