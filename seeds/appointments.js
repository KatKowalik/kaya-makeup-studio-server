/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('appointments').del()
  await knex('appointments').insert([
    {
      appointment_id: 1,
      date: "2023-06-23",
      time: "17:00",
      user_id: 3,
      artist_id: 1
    },
    {
      appointment_id: 2,
      date: "2023-06-23",
      time: "17:00",
      user_id: 1,
      artist_id: 2
    },
    {
      appointment_id: 3,
      date: "2023-06-23",
      time: "17:00",
      user_id: 5,
      artist_id: 5
    },
    {
      appointment_id: 4,
      date: "2023-06-23",
      time: "17:00",
      user_id: 10,
      artist_id: 3
    },
    {
      appointment_id: 5,
      date: "2023-06-24",
      time: "12:00",
      user_id: 2,
      artist_id: 1
    },
    {
      appointment_id: 6,
      date: "2023-06-24",
      time: "14:00",
      user_id: 8,
      artist_id: 1
    },
    {
      appointment_id: 7,
      date: "2023-06-24",
      time: "17:00",
      user_id: 7,
      artist_id: 1
    },
    {
      appointment_id: 8,
      date: "2023-06-24",
      time: "18:00",
      user_id: 9,
      artist_id: 1
    },
    {
      appointment_id: 9,
      date: "2023-06-24",
      time: "09:00",
      user_id: 1,
      artist_id: 1
    },
    {
      appointment_id: 10,
      date: "2023-06-24",
      time: "11:00",
      user_id: 4,
      artist_id: 1
    },
    
  ]);
};
