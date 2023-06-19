/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { 
      first_name: "Liana",
      last_name: "Boveri",
      email: "liana.boveri@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Nicole",
      last_name: "Tifft",
      email: "nicole.tifft@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Theo",
      last_name: "Tindall",
      email: "theo.tindall@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "London",
      last_name: "Boyce",
      email: "london.boyce@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Cordelia",
      last_name: "Rayne",
      email: "cordelia.rayne@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Trisha",
      last_name: "Colby",
      email: "trisha.colby@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Ava",
      last_name: "Truman",
      email: "ava.truman@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Claudia",
      last_name: "Lum",
      email: "claudia.lum@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Linda",
      last_name: "Thacker",
      email: "linda.thacker@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Tracy",
      last_name: "Bryant",
      email: "tracy.bryant@mail.com",
      phone_number: "+1 647 123 4567",
    },
    { 
      first_name: "Ellen",
      last_name: "Varnham",
      email: "ellen.varnham@mail.com",
      phone_number: "+1 647 123 4567",
    },
    
  ]);
};
