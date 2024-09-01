<template>
  <h3
    class="font-bebas -tracking-tighter text-center text-3xl md:text-5xl mt-12"
  >
    Emploi du temps {{ calendarStore.group.name }}
  </h3>
  <div class="mt-8 ml-6">
    <SelectGroup />
  </div>
</template>

<script lang="ts" setup>
import { calendarStore } from "~/src/store/calendarStore";
import SelectGroup from "~/src/components/selectGroup.vue";
</script>
