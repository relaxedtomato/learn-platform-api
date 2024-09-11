# Learn Platform API

This backend application uses Nodes.js, Express and PostgreSQL. It is deployed on Railway. The backend application services content data for the learn platform frontend.

This application is a fork of the [Railway Node.js template](https://railway.app/templates/alphasec/nodejs).

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Railway CLI

## Database Setup

Create a postgres database instance on Railway and seed the database with the following files using the `Railway CLI` command to access the postgres instance (`Railway Connect` --> Select service):

At the moment, a ORM is not being used, so we can create the database structures using the following file: `src/config/dbSetup/01-init.sql`

And same seed data is provided in the following file: `src/config/dbSetup/read-beginner.sql`
To ensure correct seeding and table relationships, seed each table in the order of courses, sections, lessons.

## Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/relaxedtomato/learn-platform-api
   cd learn-platform-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```plaintext
      PGUSER
      PGHOST
      PGNAME
      PGPASSWORD
      PGPORT
      NEXT_PUBLIC_API_DOMAIN
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.

## Deploying on Railway
- [ ] TODO: Replace with steps to deploy from GH:

## Notes

- Ensure your CORS settings are configured correctly for your production environment:\
- [ ] TODO: Update with single regex pattern:
```
const allowedOrigins = [
];

```
- For more information, refer to the [Railway Documentation](https://docs.railway.app/).
