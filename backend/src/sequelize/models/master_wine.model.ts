import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    sequelize.define('master_wine',{
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        vintage: {
            type: DataTypes.NUMBER
        }
    });

};