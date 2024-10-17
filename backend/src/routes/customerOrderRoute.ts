import { FastifyInstance } from "fastify";
import CustomerOrderService from "../services/CustomerOrderService";


async function routes(fastify:FastifyInstance) {
    const service = new CustomerOrderService(fastify);

    //Get all Master Wines
    fastify.get('/best_selling', async (req, res) => {
        const customerOrders = await service.getBestSelling();
        return customerOrders;
    });
    
}

export default routes;