from services.inventory_service import Inventory_Service
from services.router_service import Router_Service

if __name__ == '__main__':
    inventory_service = Inventory_Service()
    router_service = Router_Service()

    all_products = router_service.get_all_products()
    insert_statements = inventory_service.generate_insert_statements(
        all_products)
