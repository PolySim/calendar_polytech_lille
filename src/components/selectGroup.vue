<template>
  <SelectLink
    v-if="options.length > 0"
    :options="options"
    value="Choisir ma formation"
  />
</template>

<script lang="ts" setup>
import SelectLink from "~/src/components/ui/selectLink.vue";
import { computed } from "vue";
import { getGroups } from "~/src/utils/groups";

const { data } = await getGroups();

const options: { label: string; to: string }[] = computed(() =>
  (data.value || []).map((g) => ({ label: g.name, to: `/${g.name}` })),
);
</script>
