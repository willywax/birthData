import db from '../database/models/index.cjs';
// import  LifeExpectancies from '../database/models/lifeexpectancies.cjs';

const { Countries, LifeExpectancies } = db;


class DataService {

    async createData(data){
        try {
            // const result = await LifeExpectancies.bulkCreate(data);
            const result = await LifeExpectancies.create(data);
            return result;
            
        } catch (error) {
            throw error;
        }
    }

    async getData(params) {
        try {
            const result = await LifeExpectancies.findAll({
                where:[params]
            });

            return result;
        } catch (error) {
            throw error;
        }
    }

    async clearData(params) {
        try {
            const result = await LifeExpectancies.destroy({
                where: {},
                truncate: true
            });
            return result;
        } catch (error) {
            throw error;
        }
    }


}

export default new DataService();