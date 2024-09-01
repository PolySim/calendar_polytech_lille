<template>
  <div class="flex flex-col h-screen w-screen">
    <Header />
    <Calendar class="my-12" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { calendarStore } from "~/src/store/calendarStore";
import Header from "~/src/components/header.vue";
import Calendar from "~/src/components/calendar/calendar.vue";
import { getSchedules, initSchedules } from "~/src/utils/calendar";
import { getGroups } from "~/src/utils/groups";

const route = useRoute();
const id = computed(() => route.params.id);

const { data } = await getGroups();
const group = computed(() => data.value?.find((g) => g.name === id.value));
const schedules = ref([]);

watch(group.value, () => {
  const getData = async (key: string) => {
    const { data: s } = await getSchedules(key);
    schedules.value = JSON.parse(s.value) || [];
  };
  if (group.value) getData(group.value.key);
});

watch(
  group.value,
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
