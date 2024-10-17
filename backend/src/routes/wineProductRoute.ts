import { FastifyInstance } from "fastify";
import WineProductService from "../services/WineProductService";


async function routes(fastify:FastifyInstance) {
    const service = new WineProductService(fastify);

    //Get all Master Wines
    fastify.get('/', async (req, res) => {
        const wineProducts = await service.getAll();
        return wineProducts;
    });
    
}

export default routes;