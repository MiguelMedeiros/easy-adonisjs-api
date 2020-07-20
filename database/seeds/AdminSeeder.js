"use strict";

/*
|--------------------------------------------------------------------------
| AdminUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Role = use("App/Models/Role");
const User = use("App/Models/User");

class AdminUserSeeder {
  async run() {
    const roleAdmin = await Role.findOrCreate(
      {
        slug: "admin",
      },
      {
        name: "Admin",
        slug: "admin",
        description: "Admin",
      }
    );
    const admin = await User.findOrCreate(
      {
        email: "admin@test.com",
      },
      {
        email: "admin@test.com",
        password: "1q2w3e4r",
      }
    );
    await admin.roles().attach([roleAdmin.id]);
    await admin.reload();
    console.log("admin created", admin);

    const roleClient = await Role.findOrCreate(
      {
        slug: "client",
      },
      {
        name: "Client",
        slug: "client",
        description: "Client",
      }
    );
    const client = await User.findOrCreate(
      {
        email: "cliente@test.com",
      },
      {
        email: "cliente@test.com",
        password: "1q2w3e4r",
      }
    );
    await client.roles().attach([roleClient.id]);
    await client.reload();
    console.log("client created", client);
  }
}

module.exports = AdminUserSeeder;
