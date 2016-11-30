import Sequelize from 'sequelize';

import {Configuration} from './Configuration';
import {User} from './User';
import {Logger} from '../utilities/Logger';


export class Sql {

    constructor() {
        Logger.info("Create postgres connection");

        this.database = new Sequelize(
            Configuration.database,
            Configuration.user,
            Configuration.password, {
                host: Configuration.host,
                port: Configuration.port,
                dialect: Configuration.type
            }
        );

        this.UserSchema = new User(this.database);

        Logger.info("Postgres synchronization on run");

        this.database.sync();

        Logger.info("Postgres synchronization complete");


    }
}
