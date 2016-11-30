import * as bodyParser from 'body-parser';
import express from 'express';

import {Logger} from '../utilities/Logger';
import {Configuration} from './Configuration';

import {Business} from '../business/Business';
import {User} from './User';

export class Api {

    root(req, res) {
        process.nextTick(() => {
            Logger.info("[GET] /");

            res.json({message: "This is the api you are looking for"});
        })
    }

    constructor() {
        Logger.info("Welcome to " + Configuration.name + ":" + Configuration.version);
        Logger.info(Configuration.description);

        Logger.info("We will now initialize express");

        this.app = express();

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        this.business = new Business();

        this.app.get('/', this.root);
        this.User = new User(this.app, this.business.User);

        this.app.listen(Configuration.port);
        Logger.info("API is running on port: " + Configuration.port);
    }
}
