<template>
  <main class="min-h-screen w-screen flex justify-center items-center">
    <div class="w-fit h-fit space-y-12">
      <h1 class="font-bebas -tracking-tighter text-center text-3xl md:text-5xl">
        Bienvenue sur MyCalendar
      </h1>
      <p class="font-rubik">Selectionne ta formation pour l'EDT</p>
      <SelectGroup />
    </div>
  </main>
</template>

<script lang="ts" setup>
import SelectGroup from "~/src/components/selectGroup.vue";
</script>
