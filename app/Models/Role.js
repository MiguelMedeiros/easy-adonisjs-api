"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Role extends Model {
  static get table() {
    return "roles";
  }

  static get primaryKey() {
    return "id";
  }

  permissions() {
    return this.hasMany("App/Models/PermissionRole");
  }
}

module.exports = Role;
