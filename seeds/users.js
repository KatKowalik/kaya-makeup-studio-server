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
      password: "$2y$10$KFewvA60Gi7RpXmjRSdkMO0pjkvkJISD/3R2dz3vR8Z4rm3HJ9K4O"
    },
    { 
      first_name: "Nicole",
      last_name: "Tifft",
      email: "nicole.tifft@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$w.sHYfzkJG6I0q/OnY2EUOoOjxEtxu95Ydsq93s3/8KvdnrAJQPGm"
    },
    { 
      first_name: "Theo",
      last_name: "Tindall",
      email: "theo.tindall@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$pegqetHL6FXv3fSnUwwI5.xSLqTxY.gBtN35.1e5bGdGgVrfQTpkS"
    },
    { 
      first_name: "London",
      last_name: "Boyce",
      email: "london.boyce@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$1zgAZExK5CUOcU79ECsUW.YkocxucP6hN/wuj2MFFdWNhCgQaFw8G"
    },
    { 
      first_name: "Cordelia",
      last_name: "Rayne",
      email: "cordelia.rayne@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$OptWHkt0iqVXDnkfForx5OI84Xd8uCFb96FLpDZX/xrXrJFFQtxQu"
    },
    { 
      first_name: "Trisha",
      last_name: "Colby",
      email: "trisha.colby@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$rSb0KNxdAXfADgTfpoL5b..9Oxy2vyibhrwGim2fWj2/0Oxap.KT2"
    },
    { 
      first_name: "Ava",
      last_name: "Truman",
      email: "ava.truman@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$fZJfBjLbL39Ml9T6gsG6Xej/dbvB1j5tY4Ml6TuqbKgiokOuspo0G"
    },
    { 
      first_name: "Claudia",
      last_name: "Lum",
      email: "claudia.lum@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$Q7b5bR9UZ3USiykh474sKO8YOCJs3/xvExZPs4Soet3PfEgVvIEpO"
    },
    { 
      first_name: "Linda",
      last_name: "Thacker",
      email: "linda.thacker@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$2Uc/YIsU4rOm9l9e/S6AJ.qUylhYDGfgYP.lMpV.pntGvZjFM7ql2"
    },
    { 
      first_name: "Tracy",
      last_name: "Bryant",
      email: "tracy.bryant@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$gSU5VNQYCcX8jKvv4ucaDOXQ6uaQRxj653VG9TGYEzvWFCPLbYHAa"
    },
    { 
      first_name: "Ellen",
      last_name: "Varnham",
      email: "ellen.varnham@mail.com",
      phone_number: "+1 647 123 4567",
      password: "$2y$10$Af7EK5YF/kpaWN2lyMGujOW97xJaVxV0HaB126tH4yJsKhhgaea7y"
    },
    
  ]);
};
