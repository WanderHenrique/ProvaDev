const sequelize = new Sequelize('mysql://root:password@localhost:3306/meu_banco_de_dados');

// Cria um novo modelo `Veículo`
const Veículo = sequelize.define('veículo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  peso: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Migra o arquivo `prova.sql`
sequelize.migrate.up({
    files: ['prova.sql'],
    force: true,
  });
  
