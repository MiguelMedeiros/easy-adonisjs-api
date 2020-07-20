# Easy Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

 1. Bodyparser
 2. Authentication
 3. CORS
 4. Lucid ORM
 5. Migrations and seeds
 6. Adonis ACL
 7. Adonis Validators
 8. URL Parse
 9. Postgres
10. Adonis Mail
11. Procfile - Heroku
12. Helper Functions
13. Ally - Social Auth
14. Adonis Drive
15. Administration Seeder
16. Recovery Password

---

## Requirements

Install Adonis CLI global package.

```bash
npm i -g @adonisjs/cli
```

---

## Setup

Manually clone the repo and then run

```bash
yarn install
```

---

## Migrations

### Run
Run the following command to run startup migrations.

```bash
adonis migration:run
```

### Rollback

To rollback migrations you can run this command.

```bash
adonis migration:rollback
```

---


## Seeds

To seed your applications with initial data, run this command.

```bash
adonis seeds
```

---

## Development Server

Run the following command to run startup the server.

```bash
adonis serve --dev
```
