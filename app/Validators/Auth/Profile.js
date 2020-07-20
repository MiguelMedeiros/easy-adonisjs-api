"use strict";

class Profile {
  get validateAll() {
    return true;
  }

  get rules() {
    const { password, confirmPassword, userId } = this.ctx.request.all();
    if (password && confirmPassword) {
      return {
        username: "required|string",
        email: `required|email|unique:users,email,id,${userId}`,
        password: "required|string|min:6"
      };
    } else {
      return {
        username: "required|string",
        email: `required|email|unique:users,email,id,${userId}`
      };
    }
  }

  get sanitizationRules() {
    return {
      email: "normalize_email"
    };
  }

  get messages() {
    return {
      required: field => `Campo obrigatório.`,
      email: "E-mail inválido.",
      min: "Sua senha precisa ter pelo menos 6 caracteres.",
      unique: "Esse email já possui uma conta no sistema."
    };
  }
}

module.exports = Profile;
