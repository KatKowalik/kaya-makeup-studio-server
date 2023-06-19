/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artists').del()
  await knex('artists').insert([
    {
      first_name: "Kaya",
      last_name: "Larsen",
      position: "Makeup Artist",
      email: "kaya.larsen@kayamakeupstudio.com",
    phone_number: "+1 335 987 6543",
    },
    {
      first_name: "Margaret",
      last_name: "Kim",
      position: "Makeup Artist",
      email: "margaret.kim@kayamakeupstudio.com",
    phone_number: "+1 335 987 6543",
    },
    {
      first_name: "Sven",
      last_name: "Anders",
      position: "Makeup Artist",
      email: "sven.anders@kayamakeupstudio.com",
    phone_number: "+1 335 987 6543",
    },
    {
      first_name: "Kenny",
      last_name: "Bright",
      position: "Makeup Artist",
      email: "kenny.bright@kayamakeupstudio.com",
    phone_number: "+1 335 987 6543",
    },
    {
      first_name: "Tegan",
      last_name: "Slater",
      position: "Makeup Artist",
      email: "tegan.slater@kayamakeupstudio.com",
    phone_number: "+1 335 987 6543",
    },
    
  ]);
};
