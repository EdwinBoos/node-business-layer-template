import {Logger} from '../utilities/Logger';
import {UserSchema} from './models/User';

export class User {

    constructor(database) {
        Logger.info("Define User table on postgres");
        this.User = database.define(UserSchema.name, UserSchema.schema);
    }

    GetUserById(done, id) {
        this.User.findById(id).then((user) => {
            done(null, user);
        }, (error) => {
            done(error, null);
        })
    }

    RemoveUserById(done, id) {
        this.User.destroy({
            where: {
                id: id
            }
        }).then(() => {
            done(null, null);
        }, (error) => {
            done(error, null);
        });
    }

    CreateUser(done, name, password, email) {
        this.User.create({
            name: name,
            password: password,
            email: email
        }).then(() => {
            done(null, null);
        }, (error) => {
            done(error, null);
        })
    }
}
