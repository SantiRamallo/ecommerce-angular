CREATE DATABASE ecommerce_development; 

CREATE TABLE ecommerce_development.roles (
  id TINYINT auto_increment NOT NULL,
  name VARCHAR(100) NOT NULL,
  CONSTRAINT role_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE ecommerce_development.users (
  id INT auto_increment NOT NULL,
  username varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  role_id TINYINT NOT NULL,
  password TEXT NOT NULL,
  CONSTRAINT User_PK PRIMARY KEY (id),
  CONSTRAINT FK_roles_users FOREIGN KEY (role_id) REFERENCES ecommerce_development.roles(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;