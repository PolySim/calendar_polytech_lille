<template>
  <Header />
  <Calendar />
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

watchEffect(() => {
  const temp = async (key: string) => {
    const { data: s, error } = await getSchedules(key);
    schedules.value = JSON.parse(s.value) || [];
  };
  if (group.value) temp(group.value.key);
});

watchEffect(() => {
  if (group.value) {
    calendarStore.group = group.value;
    calendarStore.calendar = initSchedules(
      calendarStore.calendar,
      schedules.value || [],
    );
  }
});
</script>
