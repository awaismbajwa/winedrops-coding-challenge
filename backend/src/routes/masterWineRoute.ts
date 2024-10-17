import { FastifyInstance } from "fastify";
import MasterWineService from "../services/MasterWineService"


async function routes(fastify:FastifyInstance) {
    const service = new MasterWineService(fastify);

    //Get all Master Wines
    fastify.get('/', async (req, res) => {
        const masterWines = await service.getAll();
        return masterWines;
    });
    
}

export default routes;