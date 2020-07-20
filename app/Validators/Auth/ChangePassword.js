"use strict";

class ChangePassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      password: "required|string",
      recoveryCode: "required|string",
    };
  }

  get messages() {
    return {
      required: (field) => `Required field.`,
    };
  }
}

module.exports = ChangePassword;
