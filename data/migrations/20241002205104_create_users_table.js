/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('students', (table) =>{
    table.increments('student_id').primary(); // Primary Key
    table.string('first_name').notNullable(); // First Name
    table.string('last_name').notNullable(); // Last Name
    table.string('email').notNullable().unique(); // email
    table.date('date_of_birth');
    table.string('grade_level');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
