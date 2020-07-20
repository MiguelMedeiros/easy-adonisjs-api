"use strict";

class Login {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      password: "required|string",
    };
  }

  get sanitizationRules() {
    return {
      email: "normalize_email",
    };
  }

  get messages() {
    return {
      required: (field) => `Required field.`,
      email: "Invalid email.",
      password: "Invalid password.",
    };
  }
}

module.exports = Login;
