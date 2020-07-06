// responsavel pela criação da tabela 
exports.up = function(knex) {
  // criar tabela
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

// desfazer a tabela
exports.down = function(knex) {
  // return knex.schema.dropTable('ongs');
};

// npx migrate: rollback --> desfaz a ultima migration feita
