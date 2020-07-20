"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Permission extends Model {
  static get table() {
    return "permissions";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = Permission;
