/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('students', (table) =>{
    table.increments('student_id').primary().unique(); // Primary Key
    table.string('first_name').notNullable(); 
    table.string('last_name').notNullable(); 
    table.string('email').notNullable().unique(); 
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
