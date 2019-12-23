import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export async function getConfig(): Promise<MongooseModuleOptions> {
    const mongod = new MongoMemoryServer();

    const uri = await mongod.getConnectionString();
    // const port = await mongod.getPort();
    // const dbPath = await mongod.getDbPath();
    // const dbName = await mongod.getDbName();
 
    return {
        // connectionName: "TEST_CONN",
        uri
    }
}