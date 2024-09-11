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
```

Ensure the backend service is publicly available.

To test out the API, you can use the following `curl` command:

```bash
curl -X GET [PUBLIC_API_DOMAIN]/courses/react-native-beginner-course
```

You will receive JSON response with the course content.

Keep in mind when deploying the frontend, to store `PUBLIC_API_DOMAIN` as `NEXT_PUBLIC_API_DOMAIN`.
Next we will look at deploying the frontend application, so head over to https://github.com/relaxedtomato/learn-platform-frontend

Also, we need to configure the CORS settings for the frontend application after its deployed, so the following section will need to be updated:

```
const allowedOrigins = [
  /^https:\/\/learn-platform-learn-platform-pr-\d+\.up\.railway\.app$/, // Updated regex pattern
  'https://learn-platform-staging.up.railway.app', // Added https
  'https://learn-platform-production.up.railway.app', // Added https
  'https://learn-platform-learn-platform-pr-4.up.railway.app' // Added https
];
```
- [ ] TODO: Update with single regex pattern:

- For more information, refer to the [Railway Documentation](https://docs.railway.app/).
