import { PoolConfig } from 'mysql';
export class AppConfig {
  port: string;
  mysqlConfig: PoolConfig;
  //shaman: {"lifecycle": "transformation", "args": {"type": "config", "target": "*"}}
}