import { emailSender, logger } from "../../shared/infrastructure/dependencies";
import { WelcomeMessageSender } from "../application/welcome-message-sender";
import { InMemoryUserRepository } from "./repository/in-memory-user-repository";
import { UserController } from "./rest-api/user-controller";

const userRepository = new InMemoryUserRepository();
const welcomeEmailSender = new WelcomeMessageSender(
  userRepository,
  emailSender,
  logger
);

export const userController = new UserController(welcomeEmailSender);
