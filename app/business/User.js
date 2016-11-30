import {Logger} from '../utilities/Logger';
import password from 'password-hash-and-salt';

export class User {
    constructor(sql) {
        Logger.debug("Business layer for User created");
        this.sql = sql;
    }

    GetUserById(done, id) {
        const callback = (error, result) => {
            if (error) {
                Logger.warn(error);
                done(error, null);
            } else {
                const user = {id: result.id, email: result.email, name: result.name};

                done(null, user);
            }
        };

        this.sql.GetUserById(callback, id);
    }

    CreateUser(done, name, passwordUser, email) {

        password(passwordUser).hash((error, hash) => {

            const callback = (error, result) => {
                if (error) {
                    Logger.warn(error);
                    done(error, null);
                } else {
                    Logger.info("User " + name + "|" + email + " was created");
                    done(null, null);
                }
            };
            this.sql.CreateUser(callback, name, hash, email);
        });
    }

    RemoveUserById(done, id) {

        const callback = (error, result) => {
            if (error) {
                Logger.warn(error);
                done(error, null);
            } else {
                done(null, null)
            }
        }
        this.sql.RemoveUserById(callback, id);
    }
};
