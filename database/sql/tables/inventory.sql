CREATE TABLE IF NOT EXISTS Inventory (
  inventoryId INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  productId INT(11) NOT NULL,
  distributionCenterId INT(11) NOT NULL,
  size VARCHAR(255) NOT NULL,
  color VARCHAR(255) NOT NULL,
  quantity INT(11) NOT NULL,
  gender VARCHAR(255) NOT NULL
);