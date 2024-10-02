/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del();


  await knex('students').insert([
    { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', date_of_birth: '2000-05-10', grade_level: 'Sophomore' },
    { first_name: 'Marijana', last_name: 'Mirchevski', email: 'marijana.mirchevski@example.com', date_of_birth: '2000-06-12', grade_level: 'Sophomore' },
    { first_name: 'Biljana', last_name: 'Roskoska', email: 'biljana@example.com', date_of_birth: '2005-10-06', grade_level: 'Sophomore' },
  ]);
};
