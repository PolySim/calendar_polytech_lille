<template>
  <h3
    class="font-bebas -tracking-tighter text-center text-3xl md:text-5xl mt-12"
  >
    Emploi du temps {{ calendarStore.group.name }}
  </h3>
</template>

<script lang="ts" setup>
import { calendarStore } from "~/src/store/calendarStore";
</script>
