from ast import IfExp
import time
from os import remove
from os.path import exists
from random import randint


class Inventory_Service:
    BASE_INSERT_STATEMENT = "INSERT INTO `Inventory` VALUES"
    SHOE_SIZES = ["7", "9", "11", "12"]
    SHIRT_SIZES = ["small", "medium", "large"]
    PANTS_SIZES = ["27", "28", "29", "30"]
    ACCESSORIES_SIZES = ["NA"]

    COLORS = ["black", "white"]

    def generate_insert_statements(self, products) -> None:
        index = 0
        print('Generating test product insert statements...')
        insert_file_path = 'test_product_insert_statements.txt'
        self._create_file(insert_file_path)
        insert_file = open(insert_file_path, 'w')
        insert_file.write(self.BASE_INSERT_STATEMENT + "\n")
        for product in products:
            if product["productType"] == "Shoe":
                sizes = self.SHOE_SIZES
            elif product["productType"] == "Shirt":
                sizes = self.SHIRT_SIZES
            elif product["productType"] == "Pants":
                sizes = self.PANTS_SIZES
            elif product["productType"] == "Accessories":
                sizes = self.ACCESSORIES_SIZES
            else:
                print(
                    f'Error: Invalid product type: {product["productType"]}. Skipping product...')
                index += 1
                continue
            for size in sizes:
                for color in self.COLORS:
                    if index % 15 == 0 and index != 0:
                        insert_file.write(';\n' + self.BASE_INSERT_STATEMENT + "\n")
                    elif index != 0:
                        insert_file.write(',\n')
                    insert_file.write(self._generate_insert_snippet(
                        str(product["productId"]), "1", str(size), str(color), "unisex"))
                    index += 1
        insert_file.write(';')
        insert_file.close()
        print('Finished test product insert statements.')

    def _generate_insert_snippet(self, productId, dcId, size, color, gender) -> str:
        snippet = f'NULL, {productId}, {dcId}, "{size}", "{color}", {self._get_random_quantity()}, "{gender}"'
        return f'({snippet})'

    def _get_random_quantity(self) -> str:
        return str(randint(0, 50))

    def _create_file(self, path: str) -> None:
        if exists(path):
            remove(path)
        with open(path, 'w') as _:
            pass
