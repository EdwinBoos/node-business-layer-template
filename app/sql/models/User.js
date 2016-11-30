import Sequelize from 'sequelize';

export const UserSchema = {
    "name": "user",
    "schema": {
        "id": {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        "name": {type: Sequelize.STRING(20), unique: true, allowNull: false},
        "password": {type: Sequelize.STRING(270), allowNull: false },
        "email": {type: Sequelize.STRING(254), unique: true, allowNull: false}
    }
}
