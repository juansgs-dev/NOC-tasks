import { Server } from "./presentation/server";
import { envs } from './config/plugin/envs.plugin';
import { MongoDatabase } from './data/mongoConfig';

(async() => {
    main();
})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
      });
    

    Server.start();
}