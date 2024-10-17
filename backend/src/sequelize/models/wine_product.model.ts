import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    sequelize.define('wine_product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        master_wine_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        }
    });
};