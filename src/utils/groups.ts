import type { GroupType } from "~/src/types/group.type";

export const getGroups = async () => {
  return (await useFetch(
    `${useRuntimeConfig().public.BASE_URL}/data/groups.json`,
    {
      lazy: true,
    },
  )) as { data: Ref<GroupType[]> };
};
