import {Logger} from '../utilities/Logger';

export class User {

    getUserById(req, res) {
        process.nextTick(() => {
            Logger.info("[GET] /user/:id");

            const id = req.params.id;

            const done = (error, result) => {
                if (error) {
                    res.json({
                        message: "Impossible to have this specific user"
                    });
                } else {
                    res.json(result);
                }
            };

            this.business.GetUserById(done, id);
        });
    }


    removeUserById(req, res) {
        process.nextTick(() => {
            Logger.info("[DELETE] /user/:id");

            const done = (error, result) => {
                if (error) {
                    res.json({
                        message: "User wasn't deleted"
                    });
                } else {
                    res.json({
                        message: "User was deleted"
                    });
                }
            }
            const id = req.params.id;

            this.business.RemoveUserById(done, id);
        });
    }

    createUser(req, res) {

        process.nextTick(() => {
            Logger.info("[POST] /user/");

            const done = (error, result) => {

                if (error) {
                    res.json({
                        message: "User wasn't created"
                    });
                } else {
                    res.json({
                        message: "User was created"
                    });
                }
            };

            this.business.CreateUser(done,
                req.body.name,
                req.body.password,
                req.body.email);
            });
        }

        constructor(app, userBusiness) {

            this.business = userBusiness;
            Logger.info("Initialize API route for user");

            app.get("/user/:id", this.getUserById.bind(this));
            app.post("/user", this.createUser.bind(this));
            app.delete("/user/:id", this.removeUserById.bind(this));

            Logger.info("API initialization was been complete");
        }
    };
