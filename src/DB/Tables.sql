CREATE TABLE C_Products(
    idProduct VARCHAR(255) NOT NULL PRIMARY KEY,
    product VARCHAR(255) NOT NULL,
    qtd_stock int NOT NULL,
    purchase_price FLOAT NOT NULL,
    sale_value FLOAT NOT NULL
);

CREATE TABLE C_Product_Supply(
    id_Supply VARCHAR(255) NOT NULL PRIMARY KEY,
    qtd_purchase INT not null,
    value_purchase FLOAT not null,
    delivery_time VARCHAR(255) not null,
    CNPJ VARCHAR(255) NOT NULL,
    fk_product VARCHAR(255) not null,
    fk_supply VARCHAR(255) not null
);

CREATE TABLE C_Suppliers(
    CNPJ VARCHAR(255) NOT NULL PRIMARY KEY,
    nameSupply VARCHAR(100) NOT NULL,
    phone VARCHAR(30) not null,
    email VARCHAR(150) not null
);

CREATE TABLE C_Purchase(
    id_purchase VARCHAR(255) PRIMARY KEY NOT NULL,
    qtd_purchase INT not null,
    invoice VARCHAR(255) not null,
    date VARCHAR(255) not null,
    fk_Product VARCHAR(255) not null,
    fk_client VARCHAR(255) not null
);

CREATE TABLE C_Clients(
    id_clients VARCHAR(255) PRIMARY KEY NOT NULL,
    name_clients VARCHAR(255) NOT NULL,
    cpf varchar(255) not null,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

