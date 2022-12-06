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

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,
        "like" INTEGER NOT NULL,
        "userPicture" VARCHAR(500) NOT NULL,
        "time" DATE NOT NULL,
        "textcontent" VARCHAR(500) NOT NULL,
        "imagecontent" VARCHAR(500),
        "videocontent" VARCHAR(500),
        "recordingcontent" VARCHAR(500) 
    );`;

execute(createTblQuery).then((result) => {
  if (result) {
    console.log('If does not exists, create the "posttable" table');
  }
});

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
