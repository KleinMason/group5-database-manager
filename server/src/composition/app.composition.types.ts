const TYPES = {
  AppConfig: "AppConfig",
  Logger: "Logger",
  ApiService: "ApiService",
  ExpressApplication: "ExpressApplication",
  ApiRouter: "ApiRouter",
  JsonFileService: "JsonFileService",
  // SampleDatabaseContext: "SampleDatabaseContext",
  InventoryService: "InventoryService",
  //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "TYPES"}}
};

const CONTROLLER_TYPES = {
  HealthController: "HealthController",
  InventoryService: "InventoryService",
  //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "CONTROLLER_TYPES"}}
}

export { TYPES, CONTROLLER_TYPES };