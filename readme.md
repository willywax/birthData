### Installation instructions 
- copy .env.example to .env file and update the variables 
- run `npm install` to install dependecies 
- run `npm run migrate:dev` to run migrations to the database 
- run `npm run start:dev` to start server 
- open the browser with the port `http:\\localhost:[PORT]` to access the page 

### Available endpoints 
Database data can be accessed using api under the following endpoints 
- `http:\\localhost:[PORT]/api/` shows all data in the database 
- `http:\\localhost:[PORT]/api/:country`  gets data of a specific country if it exists 
- `http:\\localhost:[PORT]/api/clearData` Clears all the data in the database 

