/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.hasTable("faucet").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("faucet", (table) => {
        table.increments("id");
        table.string("pass_port_address");
        table.string("receive_address");
        table.dateTime("receive_time");
        table.integer("receive_amount");
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTableIfExists("faucet");
};
