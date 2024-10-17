import Fastify from "fastify";
import sequelize from "./sequelize";
import cors from '@fastify/cors'
import fastifyStatic from "@fastify/static";
import path from 'node:path';


import masterWineRoute from './routes/masterWineRoute';
import wineProductRoute from "./routes/wineProductRoute";
import customerOrderRoute from "./routes/customerOrderRoute";


(async () => {
  
  const fastify = Fastify({});

  fastify.register(cors, { });

  
  let frontendDir = '/frontend'
  if (path.basename(__dirname) !== 'dist') {
    frontendDir = "../dist/frontend";  
  }

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, frontendDir)
  });

  fastify.register(sequelize);  
  
  fastify.register(masterWineRoute, { prefix: '/master_wines'});
  fastify.register(wineProductRoute, { prefix: '/wine_products'});
  fastify.register(customerOrderRoute, { prefix: '/customer_orders'});

  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
  }

})();
