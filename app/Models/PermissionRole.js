"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class PermissionRole extends Model {
  static get table() {
    return "permission_role";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = PermissionRole;
