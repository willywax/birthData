import { responseData } from "../utils/Response.js";
import { getDataFromCsvFile } from '../utils/csvReader.cjs'
import DataService from '../services/dataService.js';


class DataController {


    async getIndexPage (req,res,next) {
        const title = 'Life Expectancy Data';
        const countryData = await DataService.getData({});

        return res.render('index', { title, countryData })
    }

    async loadData (req,res,next) {
        try {
            const result = [];
            
            const countryData = await getDataFromCsvFile();
            for(let i=0; i < countryData.length; i++){
                const data = countryData[i];
                const saveData = await DataService.createData(data);
                result.push(saveData);
            }

            // }
            return responseData(res,200,'Data created successfully', result);
        } catch (error) {
            console.log('error ', error);
            return responseData(res,404,'Something went wrong', error)
        }
    }
    async getData (req,res,next){
        try {
            const countryData = await DataService.getData({});

            return responseData(res,200,'Data Fetched successfully', countryData);
        } catch (error) {
            console.log('Error ', error);
            return responseData(res,404,'Something went wrong', error)
        }
    }

    async clearData(req,res,next) {
        try {
            const result = await DataService.clearData({});
   
            return responseData(res,200,'Data Cleared successfully', []);
        } catch (error) {
            throw error;
        }
    }

    async getCountryData(req,res,next){
        try {
            const country = req.params.country;

            const result = await DataService.getData({countryName: country});

            return responseData(res,200,'Data Fetched successfully', result);
        } catch (error) {

            return responseData(res,404,'Something went wrong', error)
        }
    }
}

export default new DataController();