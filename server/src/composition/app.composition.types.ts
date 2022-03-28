const TYPES = {
  AppConfig: "AppConfig",
  Logger: "Logger",
  ApiService: "ApiService",
  ExpressApplication: "ExpressApplication",
  ApiRouter: "ApiRouter",
  JsonFileService: "JsonFileService",
  IslandProjectDatabaseContext: "IslandProjectDatabaseContext",
  InventoryService: "InventoryService",
  ProductService: "ProductService",
  //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "TYPES"}}
};

const CONTROLLER_TYPES = {
  HealthController: "HealthController",
  InventoryController: "InventoryController",
  ProductController: "ProductController",
  //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "CONTROLLER_TYPES"}}
}

export { TYPES, CONTROLLER_TYPES };