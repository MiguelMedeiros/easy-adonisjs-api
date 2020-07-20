"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Token extends Model {
  static get table() {
    return "tokens";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = Token;
