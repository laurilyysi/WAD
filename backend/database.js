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

const execute2 = async (query) => {
  try {
    await pool.connect();
    const answer = await pool.query(query);
    return answer.rowCount;
  } catch (error) {
    console.error(error.stack);
    return -1;
  }
};

const posts = `INSERT INTO posttable ("userPicture", "time", textcontent) VALUES
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-07', 'This is spongebob!'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-06', 'Check out this video I found :)'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-09', 'You can do whatever you set your mind to'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-16', 'Nothing makes me feel better than a laugh.'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-03', 'Meow, meowwwwww'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-26', 'I went to a fancy restaurant today, did not pay.'), 
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-11-06', 'Meow, meow, movie, meoooooow'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-05-01', 'Anybody coming to movienight tonight? I have some games planned and some pop kelp made.'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-07-22', 'Gotta get that secret recipe, I am hungry'),
('https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg', 
'2022-06-06', 'The best time to wear a striped sweater is all the time.')
`;
const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,
        "userPicture" VARCHAR(500) NOT NULL,
        "time" DATE NOT NULL,
        "textcontent" VARCHAR(500) NOT NULL
    );`;


execute(createTblQuery).then((result) => {
  if (result) {
    console.log("if didn't already exist, created posttable");
    execute2(`SELECT * from posttable`).then((result) => {
      if (result == 0) {
        console.log("a");
        execute(posts);
      }
    })
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
