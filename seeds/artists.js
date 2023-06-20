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
      password: "$2y$10$.OvPXkZ/CODfOXZFONV62.MHRQjHCoPwAgyunXhL8gzsoQyqLUuj2"
    },
    {
      first_name: "Margaret",
      last_name: "Kim",
      position: "Makeup Artist",
      email: "margaret.kim@kayamakeupstudio.com",
      phone_number: "+1 335 987 6543",
      password: "$2y$10$48xNfQdU96wGPS6u7TMAC.Qxv49VaOTnHHLzNVE2TocVDRhI.hx8W"
    },
    {
      first_name: "Sven",
      last_name: "Anders",
      position: "Makeup Artist",
      email: "sven.anders@kayamakeupstudio.com",
      phone_number: "+1 335 987 6543",
      password: "$2y$10$MGCKo4nbPG9yMewhqsHaJOI2pJuOzYhw8ls4.oyX8eoqrKLVh/vvC"
    },
    {
      first_name: "Kenny",
      last_name: "Bright",
      position: "Makeup Artist",
      email: "kenny.bright@kayamakeupstudio.com",
      phone_number: "+1 335 987 6543",
      password: "$2y$10$zJv77Um.s2/W3VVs7BCYHuvJXNY410TSiiFNt0P88gJ1kg25.qDpm"
    },
    {
      first_name: "Tegan",
      last_name: "Slater",
      position: "Makeup Artist",
      email: "tegan.slater@kayamakeupstudio.com",
      phone_number: "+1 335 987 6543",
      password: "$2y$10$ds/VSf2Ca/046xSZGgh.s.LDlbu5v4r6JsNXe8zgUGN96PYmyWfSS"
    },
    
  ]);
};
