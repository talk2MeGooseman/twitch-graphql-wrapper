import HelixUser from "twitch/lib/API/Helix/User/HelixUser";
export const byId = async (args: any , context: any) => {
  let user: HelixUser | null = await context.twitchClient.helix.users.getUserById(args.id);
  return user;
};

export const byName = async (args: any , context: any) => {
  let user: HelixUser | null = await context.twitchClient.helix.users.getUserByName(args.name);
  return user;
};

export const byIds = async (args: any , context: any) => {
  let users: HelixUser[] | null = await context.twitchClient.helix.users.getUsersByIds(args.ids);
  return users
};

export const byNames = async (args: any , context: any) => {
  let users: HelixUser[] | null = await context.twitchClient.helix.users.getUsersByNames(args.names);
  return users;
};
