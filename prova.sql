CREATE TABLE veículos (
  id INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(255) NOT NULL,
  peso INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tipos_de_veículos (
  id INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(255) NOT NULL,
  peso INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE produtos (
  id INT NOT NULL AUTO_INCREMENT,
  produto VARCHAR(255) NOT NULL,
  peso INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE fretes (
  id INT NOT NULL AUTO_INCREMENT,
  produto_id INT NOT NULL,
  tipoVeículo_id INT NOT NULL,
  distância INT NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  status VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (produto_id) REFERENCES produtos (id),
  FOREIGN KEY (tipoVeículo_id) REFERENCES tipos_de_veículos (id)
);

CREATE TABLE usuários (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  perfil VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
