import { Sequelize } from "sequelize";


export default (sequelize: Sequelize) => {
    const { master_wine, wine_product, customer_order } = sequelize.models;

    master_wine.hasMany(wine_product, {
        foreignKey: {
            name: 'master_wine_id',
        },
    });
    wine_product.belongsTo(master_wine);

    wine_product.hasMany(customer_order, {
        foreignKey: {
            name: 'wine_product_id'
        }
    });
    customer_order.belongsTo(wine_product);
}