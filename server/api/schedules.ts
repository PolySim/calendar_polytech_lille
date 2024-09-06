export default defineEventHandler(async (event) => {
  const { promo } = getQuery(event);

  return await $fetch(
    `https://applications.polytech-lille.fr/sos/wsADE_events.php`,
    {
      params: {
        serveurade: "planning-2024",
        numprojet: 0,
        promo,
      },
    },
  );
});
