import HelixUser from "twitch/lib/API/Helix/User/HelixUser";
import { RequestContext, ArgumentsWithId } from "./interfaces";

export const byId = async (args: ArgumentsWithId, context: RequestContext) => {
  let user: HelixUser | null = await context.twitchClient.helix.users.getUserById(args.id);
  return user;
};

export const byName = async (args: ArgumentsWithId , context: RequestContext) => {
  let user: HelixUser | null = await context.twitchClient.helix.users.getUserByName(args.name);
  return user;
};

export const byIds = async (args: ArgumentsWithId , context: RequestContext) => {
  let users: HelixUser[] | null = await context.twitchClient.helix.users.getUsersByIds(args.ids);
  return users
};

export const byNames = async (args: ArgumentsWithId , context: RequestContext) => {
  let users: HelixUser[] | null = await context.twitchClient.helix.users.getUsersByNames(args.names);
  return users;
};
