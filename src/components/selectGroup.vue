<template>
  <SelectLink
    v-if="options.length > 0"
    :options="options"
    value="Choisir ma formation"
  />
</template>

<script lang="ts" setup>
import type { GroupType } from "~/src/types/group.type";
import SelectLink from "~/src/components/ui/selectLink.vue";
import { computed } from "vue";

const { data } = useFetch(
  `${useRuntimeConfig().public.BASE_URL}/data/groups.json`,
  {
    lazy: true,
  },
) as { data: Ref<GroupType[]> };

const options: { label: string; to: string }[] = computed(() =>
  (data.value || []).map((g) => ({ label: g.name, to: `/${g.name}` })),
);
</script>
