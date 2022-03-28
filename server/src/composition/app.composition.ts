/* istanbul ignore file */
import "reflect-metadata";
import * as _path from 'path';
import * as express from 'express';
import { Container } from "inversify";

import { TYPES, CONTROLLER_TYPES } from "./app.composition.types";
import { AppConfig } from "../models/app.config";
import { ILogger, Logger } from "../logger";
import { IApiService, ApiService } from "../api.service";
import { IJsonFileService, JsonFileService } from "../services/json-file.service";
import { ApiRouter } from "../api.router";
import { HealthController } from "../controllers/health/health.controller";
import { IIslandProjectDatabaseContext, IslandProjectDatabaseContext } from 'sample-database';
import { IInventoryService, InventoryService } from "../services/inventory.service"
import { InventoryController } from "../controllers/inventory/inventory.controller";
import { IProductService, ProductService } from "../services/product.service";
import { ProductController } from "../controllers/product/product.controller";

//shaman: {"lifecycle": "transformation", "args": {"type": "import", "target": "*"}}

export function Configure(config: AppConfig): Promise<Container> {
  return configureServices(new Container(), config)
    .then(container => configureRouter(container))
    .then(container => configureDataContext(container, config));
}

function configureServices(container: Container, config: AppConfig): Promise<Container> {
  container.bind<AppConfig>(TYPES.AppConfig).toConstantValue(config);
  container.bind<ILogger>(TYPES.Logger).to(Logger);
  container.bind<IApiService>(TYPES.ApiService).to(ApiService).inSingletonScope();
  container.bind<express.Application>(TYPES.ExpressApplication).toConstantValue(express());
  container.bind<IJsonFileService>(TYPES.JsonFileService).to(JsonFileService);
  //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "services"}}
  container.bind<IInventoryService>(TYPES.InventoryService).to(InventoryService);
  container.bind<IProductService>(TYPES.ProductService).to(ProductService);
  return Promise.resolve(container);
}

function configureRouter(container: Container): Promise<Container> {
  container.bind<ApiRouter>(TYPES.ApiRouter).to(ApiRouter);
  container.bind<HealthController>(CONTROLLER_TYPES.HealthController).to(HealthController);
  //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "router"}}
  container.bind<InventoryController>(CONTROLLER_TYPES.InventoryController).to(InventoryController);
  container.bind<ProductController>(CONTROLLER_TYPES.ProductController).to(ProductController);
  return Promise.resolve(container);
}

function configureDataContext(container: Container, config: AppConfig): Promise<Container> {
  return new Promise(res => {
    //shaman: {"lifecycle": "transformation", "args": {"type": "compose", "target": "datacontext"}}
    let context = new IslandProjectDatabaseContext();
    context.initialize(config.mysqlConfig);
    container.bind<IIslandProjectDatabaseContext>(TYPES.IslandProjectDatabaseContext).toConstantValue(context);
    res(container);
  });
}