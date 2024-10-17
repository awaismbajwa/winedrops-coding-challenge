
class WineProductService {
    fastify: any;

    constructor(fastify: any){
        if (!fastify.ready) throw new Error ('Fastify is not initialized');
        if (!fastify.sequelize) throw new Error('Sequelize is required');
        
        this.fastify = fastify;
    }


    async getAll(){
        return this.fastify.sequelize.models.wine_product.findAll();
    }

}

export default WineProductService;