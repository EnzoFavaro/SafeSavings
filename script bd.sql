CREATE TABLE Usuários 
( 
 password VARCHAR(n) NOT NULL,  
 user_id INT PRIMARY KEY AUTO_INCREMENT,  
 user VARCHAR(n) NOT NULL,  
); 

CREATE TABLE Produtos 
( 
 product_id INT PRIMARY KEY AUTO_INCREMENT,  
 product_name VARCHAR(n) NOT NULL,  
 price INT NOT NULL,  
 efficiency FLOAT NOT NULL,  
 EE_label CHAR(n) NOT NULL,  
 category VARCHAR(n) NOT NULL,  
); 

CREATE TABLE Pedidos 
( 
 order_id INT PRIMARY KEY,  
 product_id INT NOT NULL,  
 quanitity INT NOT NULL,  
 user_id INT,  
); 

ALTER TABLE Pedidos ADD FOREIGN KEY(product_id) REFERENCES Produtos (product_id)
ALTER TABLE Pedidos ADD FOREIGN KEY(user_id) REFERENCES Usuários (user_id)
