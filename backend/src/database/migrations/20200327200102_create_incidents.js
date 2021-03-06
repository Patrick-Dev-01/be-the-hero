// criação
exports.up = function(knex) {
    // criar tabela
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        // chave estrangeira
        table.string('ong_id').notNullable();
        // referenciando a chave da tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs');
});
}

exports.down = function(knex) {
  // return knex.schema.dropTable('incidents');
}
