import { group, log } from "console";
import { Op, QueryTypes, where } from "sequelize";

class CustomerOrderService {
    fastify: any;

    constructor(fastify: any){
        if (!fastify.ready) throw new Error ('Fastify is not initialized');
        if (!fastify.sequelize) throw new Error('Sequelize is required');
        
        this.fastify = fastify;
    }


    async getAll(){
        return this.fastify.sequelize.models.customer_order.findAll();
    }

    async getBestSelling(){
        return this.fastify.sequelize.query(`select mw.id, mw.name, mw.vintage, sum(co.quantity) as bottlesSold, 
            sum(co.total_amount) as revenue, count(co.id) as orders
            from customer_order co, wine_product wp, master_wine mw 
            where co.status in ("paid", "dispatched")
            and co.wine_product_id = wp.id 
            and wp.master_wine_id = mw.id
            GROUP BY mw.name, mw.vintage`, {
                type: QueryTypes.SELECT
            });
    }

    /*
        
    async getBestSelling(){
        return this.fastify.sequelize.models.customer_order.
        findAll({ 
            include: {
                model: this.fastify.sequelize.models.wine_product,
                required: true,
                include: {
                    model: this.fastify.sequelize.models.master_wine,
                    required: true
                }
            } 
        }).then(result=>{
            console.log(result);
            return result;
        });
    };

    */


}

export default CustomerOrderService;