# Learn Platform API

This backend application uses Nodes.js, Express and PostgreSQL. It is deployed on Railway. The backend application services content data for the learn platform frontend.

This application is a fork of the [Railway Node.js template](https://railway.app/templates/alphasec/nodejs).

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Railway CLI
- create a separate folder `/learn-platform-api` and work from this folder

## Database Setup

Create a New Project in Railway and select, deploy PostgresSQL. Create a postgres database instance on Railway and seed the database with the following files using the `Railway CLI` command to access the postgres instance (`Railway Connect` --> Select service):

```bash
cd /learn-platform-api
railway link
(select the railway project you created)
(select the Postgres service)
railway connect (to run to the database console)
railway=# (connected to Railway database)
```

At the moment, a ORM is not being used, so we can create the database structures by calling the `CREATE TABLE` commands from the following file `src/config/dbSetup/01-init.sql` and you will see the following output:
```
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
```

Add the seed data provided in the following file: `src/config/dbSetup/read-beginner.sql`. To ensure correct seeding and table relationships, seed each table in the order of `courses`, `sections`, `lessons`:

```bash
railway=# INSERT INTO courses .../seed data/...
INSERT 0 1

railway=# INSERT INTO sections .../seed data/...
INSERT 0 3

railway=# INSERT INTO lessons .../seed data/...
INSERT 0 7
```

You can confirm the data is added by querying the database:
`SELECT * FROM courses;`


## Backend Deployment

The backend was initially created via Template (Node.js by alphasec/nodejs). We can deploy the backend via `GitHub Repo` by selcting the `learn-platform-api` repository and deploying the `main` branch: https://github.com/relaxedtomato/learn-platform-api.

After doing this, we need to add the following environment variables (preferrably as shared) to use across the Railway project:
```plaintext
   PGUSER (available from Railway PostgresSQL service)
   PGHOST (available from Railway PostgresSQL service)
   PGNAME=railway (the database name by default is railway)
   PGPASSWORD (available from Railway PostgresSQL service)
   PGPORT (available from Railway PostgresSQL service)
   NEXT_PUBLIC_API_DOMAIN (this is the frontend application, which we will create after deploying the backend)
```

Ensure the backend service is publicly available.

- [ ] TODO: Grab public domain from Railway project and set in `NEXT_PUBLIC_API_DOMAIN`

To test out the API, you can use the following `curl` command:
```bash
curl -X GET http://localhost:3000/api/courses
```

## Notes

- Ensure your CORS settings are configured correctly for your production environment:\
- [ ] TODO: Update with single regex pattern:
```
const allowedOrigins = [
];

```
- For more information, refer to the [Railway Documentation](https://docs.railway.app/).
