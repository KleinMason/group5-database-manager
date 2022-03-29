import requests


class Router_Service:
    def get_all_products(self) -> None:
        r = requests.get('http://localhost:3000/api/product/all')
        responseJson = r.json()
        return responseJson['product']
