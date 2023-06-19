/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("appointments", (table) => {
        table.increments("appointment_id").primary();
        table.date("date").notNullable();
        table.time("time").notNullable();
        table
          .integer("user_id")
          .unsigned()
          .references("users.user_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table
          .integer("artist_id")
          .unsigned()
          .references("artists.artist_id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("appointments");
};
