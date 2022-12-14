## Web Application Development
### Homework 4

---

## **How to run:**

Make sure you have installed node and PostgreSQL:
* [node](https://nodejs.org/en/)
* [PostgreSQL](https://courses.cs.ut.ee/2022/WAD/fall/Main/PS12-1)

Launch **pgAdmin** and create a database named **testWad** (if you don't have one already).

If your database already contains tables named **posttable** and/or **users**, drop them.


Clone [this](https://github.com/laurilyysi/WAD) repository 

```
git clone https://github.com/laurilyysi/WAD.git
```

Navigate to `backend\database.js` file and change your PostgreSQL password if necessary (and save the file, **Ctrl + S**)

```
// database.js

const pool = new Pool({
  user: "postgres",
  password: "1234", // <-- change password here
  database: "testWad",
  host: "localhost",
  port: "5432",
});
```

Navigate to the `backend` directory

```
cd backend/
```

Run commands

```
npm install

npm install -g nodemon

npm install pg

npm install cors

npm install bcrypt

npm install cookie-parser

npm install jsonwebtoken

```

Run the backend

```
nodemon server
```

Navigate to the front-end directory (open a new terminal if neccesary)

```
cd hw3/
```

Run commands

```
npm install

npm run serve

```

The project should be running on port 8080

* http://localhost:8080/