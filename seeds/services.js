/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('services').del()
  await knex('services').insert([
    {
      service_name: "Bridal Makeup",
      description: "Our team of highly skilled and experienced makeup artists is dedicated to creating the perfect bridal look that reflects your unique style and enhances your natural beauty. We understand the significance of your special day and work closely with you to understand your preferences, whether you desire a classic, romantic, or modern look. Our goal is to make you feel confident, radiant, and utterly beautiful on your wedding day, leaving you with cherished memories and stunning photographs that will last a lifetime. Trust our bridal makeup service to make you the most breathtaking bride on your special day.",
      price: 250,
    },
    {
      service_name: "Special Event Makeup",
      description: "Whether it's a red carpet event, gala, prom, or any other special event, our talented makeup artists are here to create a glamorous and personalized look that will turn heads and leave a lasting impression. We create a luxurious and relaxing environment where you can indulge in the transformation process, leaving you feeling confident, glamorous, and ready to make a statement at your special event. Trust our special event makeup service to elevate your beauty and make your occasion truly memorable.",
      price: 150,
    },
    {
      service_name: "Photoshoot Makeup",
      description: "Our makeup studio specializes in providing exquisite makeup services specifically tailored for photoshoots, ensuring that you look flawless and camera-ready. Whether it's for a professional portfolio, engagement shoot, family portrait, or any other type of photography session, our skilled makeup artists will create a stunning look that enhances your features and translates beautifully on camera. With our photoshoot makeup service, you can expect exceptional results that capture your unique beauty and leave you with stunning photographs you'll cherish for years. Trust our expertise to make you look effortlessly radiant and picture-perfect for your next photoshoot.",
      price: 200,
    },
    {
      service_name: "Personal Makeup Lesson",
      description: "Our makeup studio offers personalized makeup lessons to empower you with the skills and knowledge to enhance your natural beauty on a daily basis. Our experienced makeup artists will guide you through step-by-step tutorials, teaching you the techniques, tips, and tricks of professional makeup applications. During a personal makeup lesson, we take the time to understand your individual needs, preferences, and skill level. Whether you're a beginner looking to learn the basics or an enthusiast seeking to refine your skills, our artists will tailor the lesson to your specific requirements. Whether you're looking to master a natural everyday look, a glamorous evening style, or a trendy makeup trend, our personal makeup lessons empower you to express your creativity and feel confident in your own skin. Invest in yourself and unlock your beauty potential with our personal makeup lesson service.",
      price: 300,
    },
    
  ]);
};
