const { response } = require("express");

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
                          SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                          '2022-05-06', 'I am brody, and I will eat vegetables'
                          WHERE NOT EXISTS  (SELECT * FROM "posttable")`;
const addIf1Query = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                      SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                      '2022-05-06', 'I am God, and I will eat vegetables'
                      WHERE (SELECT count("textcontent") FROM "posttable") < 2`; 
const addIf2Query = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                          SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                          '2022-05-06', 'I am Tony, and I will not eat vegetables'
                          WHERE (SELECT count("textcontent") FROM "posttable") < 3`;
const addIf3Query = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                      SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                      '2022-05-06', 'I am Mac, and I will eat vegetables'
                      WHERE (SELECT count("textcontent") FROM "posttable") < 4`;
const addIf4Query = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                      SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                      '2022-05-06', 'I am brody2, and I will eat vegetables'
                      WHERE (SELECT count("textcontent") FROM "posttable") < 5`;
const addIf5Query = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                  SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                  '2022-05-06', 'I am God2, and I will eat vegetables'
                  WHERE (SELECT count("textcontent") FROM "posttable") < 6`;
const addIf6Query = `INSERT INTO "posttable" ("userPicture", "time", "textcontent")
                      SELECT 'https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
                      '2022-05-06', 'I am Tony2, and I will eat vegetables'
                      WHERE (SELECT count("textcontent") FROM "posttable") < 7`;

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,
        "userPicture" VARCHAR(500) NOT NULL,
        "time" DATE NOT NULL,
        "textcontent" VARCHAR(500) NOT NULL
    );`;

execute(createTblQuery).then((result) => {
  if(result) {
    console.log("if didn't already exist, created posttable");
    execute(addIfEmptyQuery).then((result) => {
      if(result){
        console.log('Added 1st post to posttable');
        execute(addIf1Query).then((result) => {
          if(result) {
            console.log("added 2nd post to posttable");
            execute(addIf2Query).then((result) => {
              if(result){
                console.log('Added 3rd post to posttable');
                execute(addIf3Query).then((result) => {
                if(result) {
                  console.log("added 4th post to posttable")
                  execute(addIf4Query).then((result) => {
                  if(result) {
                    console.log("added 5th post to posttable")
                    execute(addIf5Query).then((result) => {
                      if(result) {
                        console.log("added 6th post to posttable")
                        execute(addIf6Query).then((result) => {
                          if(result) {
                            console.log("added 7th post to posttable")
                        }})
                    }})
                  }})  
                }})
              }})
            }})
          }})
}});

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
