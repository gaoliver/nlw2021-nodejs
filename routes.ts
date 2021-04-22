import { Router } from "express";
import { MessagesController } from "./src/controllers/MessagesController";
import { SettingsController } from "./src/controllers/SettingsController";
import { UsersController } from "./src/controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

// Settings
routes.post("/settings", settingsController.create);

// Users
routes.post("/users", usersController.create);

// Messages
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
