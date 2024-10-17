import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    sequelize.define('customer_order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        wine_product_id: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        total_amount: {
            type: DataTypes.DECIMAL
        },
        status: {
            type: DataTypes.TEXT
        }
    });
};