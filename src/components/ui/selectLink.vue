<template>
  <div
    class="w-60 relative bg-white rounded-md border border-solid border-black"
  >
    <div
      :class="
        cn('flex justify-between w-full cursor-pointer py-2 px-4', {
          'border-b border-solid border-gray-200': isOpen,
        })
      "
      @click="isOpen = !isOpen"
    >
      <div>{{ value }}</div>
      <Icon
        :class="cn('transition', { 'rotate-180': isOpen, 'rotate-0': !isOpen })"
        :size="24"
        name="ic:round-keyboard-arrow-down"
      />
    </div>
    <div v-show="isOpen" class="flex flex-col max-h-60 overflow-y-auto">
      <NuxtLink
        v-for="option in options"
        :key="option.label"
        :to="option.to"
        class="py-2 px-4 hover:bg-gray-200 cursor-pointer transition"
      >
        {{ option.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/src/utils/cn";
import { ref } from "vue";

const props = defineProps<{
  value: string;
  options: { label: string; to: string }[];
}>();
const isOpen = ref(false);
</script>
