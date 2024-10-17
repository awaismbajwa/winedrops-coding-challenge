import { Sequelize } from "sequelize";
import fastifyPlugin from 'fastify-plugin';

import master_wine from './models/master_wine.model';
import wine_product from './models/wine_product.model';
import customer_order from './models/customer_order.model';
import associations from "./associations";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/winedrops.db',
    define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    }
});

master_wine(sequelize);
wine_product(sequelize);
customer_order(sequelize);

associations(sequelize);

export default fastifyPlugin(async (fastify) => {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connection OK!');

         // Make sequelize available to entire application
        fastify.decorate('sequelize', sequelize);
        // Close connection
        fastify.addHook('onClose', async () => await sequelize.close())
    } catch (error: any) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
});
