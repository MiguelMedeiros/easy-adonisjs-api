"use strict";

const { uuid } = use("uuidv4");
const Hash = use("Hash");
const Mail = use("Mail");
const User = use("App/Models/User");
const Env = use("Env");

class AuthController {
  async login({ request, auth, response }) {
    const { email, password } = request.only(["email", "password"]);
    const token = await auth.withRefreshToken().attempt(email, password);
    return response.json(token);
  }

  async refreshToken({ request, auth, response }) {
    const { refreshToken } = request.only(["refreshToken"]);
    const token = await auth.generateForRefreshToken(refreshToken, true);
    return response.json(token);
  }

  async logout({ auth, response }) {
    const { user } = auth.current;
    const token = auth.getAuthHeader();
    await auth.authenticator("jwt").revokeTokens([token], true);
    return response.json();
  }

  async recovery({ request, response }) {
    const { email } = request.only(["email"]);
    const user = await User.query().where({ email: email }).first();
    if (user) {
      const hash = uuid();
      await User.query()
        .where({ email: email })
        .update({ recovery_code: hash });
      user.recovery_code = hash;
      await Mail.send("recovery", user.toJSON(), (message) => {
        message.from(Env.get("MAIL_ADDRESS"));
        message.to(user.email);
        message.subject("Recovery account link.");
      });
      return response.json();
    }
    return response.status(403).json();
  }

  async changePassword({ request, response }) {
    const { password, recoveryCode } = request.only([
      "password",
      "recoveryCode",
    ]);
    const user = await User.query()
      .where({ recovery_code: recoveryCode })
      .first();
    if (user) {
      const passwordHash = await Hash.make(password);
      await User.query()
        .where({ recovery_code: recoveryCode })
        .update({ recovery_code: null, password: passwordHash });

      return response.json();
    }
    return response.status(403).json();
  }
}

module.exports = AuthController;
