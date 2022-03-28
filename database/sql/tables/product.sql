CREATE TABLE IF NOT EXISTS Inventory (
  productId INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  productType VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  cost DECIMAL(10,2) NOT NULL,
  productImage VARCHAR(255) NOT NULL,
  isOnSale TINYINT(1) NOT NULL
);