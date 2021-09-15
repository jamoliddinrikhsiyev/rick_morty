import pkg from "pg";
const Pool = pkg.Pool;
const password = "62I8anq3cFq5GYh2u4Lh";

const urlDb = `postgres://candidate:${password}@rc1c-2m0keqdcncuwizmx.mdb.yandexcloud.net:6432/db1?ssl=true`;

const pool = new Pool({
  connectionString: urlDb,
  ssl: true,
});

const queries = {
  createTable: `
  DROP TABLE IF EXISTS characters;
  CREATE TABLE characters (
        id SERIAL PRIMARY KEY NOT NULL,
        name text NOT NULL,
        data jsonb NOT NULL
    )`,
  insertTable: `
    INSERT INTO characters (name, data) VALUES($1, $2)`, 
  selectTable: `
    SELECT * FROM characters`
}

const queryDb = async (query, arg) => {
  if (!query) query = "SELECT NOW()";
  const client = await pool.connect();
  let result;
  if (arg) result = await client.query(query, arg);
  else result = await client.query(query);
  client.release();
  return result.rows;
};

export { queryDb, queries };
