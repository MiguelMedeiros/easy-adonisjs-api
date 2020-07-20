"use strict";

class RefreshToken {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      recoveryCode: "required|string",
    };
  }

  get messages() {
    return {
      required: (field) => `Refresh Token required.`,
    };
  }
}

module.exports = RefreshToken;
