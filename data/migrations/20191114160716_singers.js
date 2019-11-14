
exports.up = function(knex) {
  return knex.schema.createTable('singers', table => {
    table.increments();
    table.string('name', 255)
    .notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('singers');
};
