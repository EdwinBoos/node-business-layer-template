import {Logger} from '../utilities/Logger';
import {User} from './User';
import {Sql} from '../sql/Sql';

export class Business {

    constructor() {
        Logger.debug("Business initialize");
        this.Sql = new Sql();
        this.User = new User(this.Sql.UserSchema);
        Logger.debug("Business was initialized");
    }
}
