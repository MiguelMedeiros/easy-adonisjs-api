"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class PermissionUser extends Model {
  static get table() {
    return "permission_user";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = PermissionUser;
