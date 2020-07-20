"use strict";

class Recovery {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
    };
  }

  get messages() {
    return {
      required: (field) => `E-mail required.`,
    };
  }
}

module.exports = Recovery;
