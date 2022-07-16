import { responseData } from "../utils/Response.js";


class DataController {

    async getData (req,res,next){
        try {

            return responseData(res,200,'Data Fetched successfully', []);
        } catch (error) {

            return responseData(res,404,'Something went wrong', error)
        }
    
    }

    async getCountryData(req,res,next){
        try {
            const country = req.params.country;

            return responseData(res,200,'Data Fetched successfully', {country});
        } catch (error) {

            return responseData(res,404,'Something went wrong', error)
        }
    }
}

export default new DataController();