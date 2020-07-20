"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// public routes
Route.group(() => {
  Route.get("/", () => {
    return { message: "Hello!" };
  });
  Route.post("auth/login", "AuthController.login").validator("Auth/Login");
  Route.get("auth/change-password", "AuthController.changePassword").validator(
    "Auth/ChangePassword"
  );
}).prefix("api/v1");

// private routes
Route.group(() => {
  Route.get("auth/logout", "AuthController.logout");
  Route.post("auth/refresh-token", "AuthController.refreshToken").validator(
    "Auth/RefreshToken"
  );
  Route.post("auth/recovery", "AuthController.recovery").validator(
    "Auth/Recovery"
  );
})
  .prefix("api/v1")
  .middleware(["auth"]);
