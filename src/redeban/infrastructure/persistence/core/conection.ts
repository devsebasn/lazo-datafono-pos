import { DataSource, DataSourceOptions } from "typeorm";

import { appConfig } from "../../../../shared/infrastructure/config";

const { coredb } = appConfig;

const config: DataSourceOptions = {
  type: "postgres",
  host: coredb.db_host,
  port: Number(coredb.db_port),
  username: coredb.db_user,
  password: coredb.db_password,
  database: coredb.db_database,
  synchronize: false,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: ["src/data/data-source/postgres/migrations/*.ts"],
};

const coreDataSource = new DataSource(config);

export default coreDataSource;
