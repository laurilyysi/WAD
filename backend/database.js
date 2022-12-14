const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "testWad",
  host: "localhost",
  port: "5432",
});

const execute = async (query) => {
  try {
    await pool.connect();
    await pool.query(query);
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};
const addIfEmptyQuery = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                          SELECT 'https://assets.stickpng.com/thumbs/5874cd0342e4d628738559e1.png', 
                          '2022-05-06', 'I am brody, and I will eat vegetables'
                          WHERE NOT EXISTS (SELECT * FROM "posttable")` 

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,
        "userPicture" VARCHAR(500) NOT NULL,
        "time" DATE NOT NULL,
        "textcontent" VARCHAR(500) NOT NULL
    );`;

execute(createTblQuery).then((result) => {
  if (result) {
    console.log('If does not exists, create the "posttable" table');
  }
}).then(
  execute(addIfEmptyQuery).then((result) => {
  if(result){
    console.log('Added post to posttable')
  }
}));



const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createUserTblQuery).then((result) => {
  if (result) {
    console.log('Table "users" is created');
  }
});

module.exports = pool;
