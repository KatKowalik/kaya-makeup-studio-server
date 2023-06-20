/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("artists", (table) => {
        table.increments("artist_id").primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("position").notNullable();
        table.string("email").notNullable();
        table.string("phone_number").notNullable();
        table.string("password").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("artists");
};
