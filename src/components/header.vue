<template>
  <div>{{ group }}</div>
  <div>{{ data }} {{ route.params }}</div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { GroupType } from "~/src/types/group.type.js";

const route = useRoute();
const id = computed(() => route.params.id);
const { data } = useFetch("/data/groups.json", {
  lazy: true,
}) as { data: Ref<GroupType[]> };
const group = computed(() => data.value?.find((g) => g.name === id.value));
</script>
