<template>
  <div class="relative w-60 h-10">
    <div
      class="w-60 absolute top-0 left-0 bg-white rounded-md border border-solid border-black overflow-hidden"
    >
      <div
        ref="clickOutsideContainer"
        :class="
          cn('flex justify-between w-full cursor-pointer py-2 px-4', {
            'border-b border-solid border-gray-200': isOpen,
          })
        "
        @click="isOpen = !isOpen"
      >
        <div>{{ value }}</div>
        <Icon
          :class="
            cn('transition', { 'rotate-180': isOpen, 'rotate-0': !isOpen })
          "
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
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/src/utils/cn";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const clickOutsideContainer = ref<HTMLDivElement | null>(null);
onClickOutside(clickOutsideContainer, (event) => (isOpen.value = false));

const props = defineProps<{
  value: string;
  options: { label: string; to: string }[];
}>();
const isOpen = ref(false);
</script>
