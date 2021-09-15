import process from "process";
import { queryDb, queries }from "./modules/postgres.js";
import fetchData from "./modules/fetchData.js";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const api = "https://rickandmortyapi.com/api/character/";
const table_name = 'characters';

queryDb( queries.createTable);

async function insertCharacters(url){
    let res = await fetchData(url);
    
    for(let i of res.results ){
        let args = [];
        args[0] = i.name;
        args[1] = JSON.stringify(i);
        queryDb( queries.insertTable, args );
    }
    console.log( await queryDb( queries.selectTable));
};

const r = async (query, args)=>{
    if(args) console.log( await queryDb(query, args) );
    else console.log( await queryDb(query) )
}

insertCharacters(api);
