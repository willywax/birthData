import { responseData } from "../utils/Response.js";
import formidable from "formidable";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'
import { getDataFromCsvFile, readCsvFile } from '../utils/csvReader.cjs'
import DataService from '../services/dataService.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DataController {

    async getIndexPage(req, res, next) {
        const title = 'Life Expectancy Data';
        const countryData = await DataService.getData({});

        return res.render('index', { title, countryData })
    }

    async loadData(req, res, next) {
        try {
            const result = [];

            const countryData = await getDataFromCsvFile();
            for (let i = 0; i < countryData.length; i++) {
                const data = countryData[i];
                const saveData = await DataService.createData(data);
                result.push(saveData);
            }

            // }
            return responseData(res, 200, 'Data created successfully', result);
        } catch (error) {
            console.log('error ', error);
            return responseData(res, 404, 'Something went wrong', error)
        }
    }

    async getData(req, res, next) {
        try {
            const countryData = await DataService.getData({});

            return responseData(res, 200, 'Data Fetched successfully', countryData);
        } catch (error) {
            console.log('Error ', error);
            return responseData(res, 404, 'Something went wrong', error)
        }
    }

    async clearData(req, res, next) {
        try {
            await DataService.clearData({});

            return responseData(res, 200, 'Data Cleared successfully', []);
        } catch (error) {
            throw error;
        }
    }

    async getCountryData(req, res, next) {
        try {
            const country = req.params.country;

            const result = await DataService.getData({ countryName: country });

            return responseData(res, 200, 'Data Fetched successfully', result);
        } catch (error) {

            return responseData(res, 404, 'Something went wrong', error)
        }
    }

    async validateForm(req, res, next) {
        try {

            await DataService.clearData({});
            
            let form = new formidable.IncomingForm();
            const uploadFolder = path.join(__dirname, "../",);

            form.uploadDir = uploadFolder;



            form.parse(req, function (error, fields, file) {
                let filepath = file.myFile.filepath;


                let newpath = path.join(__dirname, file.myFile.originalFilename);

                //Copy the uploaded file to a custom folder
                fs.rename(filepath, newpath, async () => {
                    console.log('File Path === ', newpath);
                    const countryData = await readCsvFile(newpath);

                    console.log('Country Data === ', countryData);

                    // new DataController().clearData();

                    const result = [];

                    for (let i = 0; i < countryData.length; i++) {
                        const data = countryData[i];
                        const saveData = await DataService.createData(data);
                        result.push(saveData);
                    }

                    res.redirect('/');

                });
            });

        } catch (error) {
            return responseData(res, 404, 'Something went wrong', error)
        }

    }

}

export default new DataController();