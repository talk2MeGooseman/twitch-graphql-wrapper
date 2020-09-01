import TwitchClient from "twitch/lib";

export interface IContext {
  twitchClient?: TwitchClient,
  patreonClient?: any,
}

export interface ArgumentsWithId {
  id: string
  [propName: string]: any;
}

export interface ArgumentsWithName {
  name: string
  [propName: string]: any;
}

export interface ArgumentsWithIds {
  ids: [string]
  [propName: string]: any;
}

export interface ArgumentsWithNames {
  names: [string]
  [propName: string]: any;
}

export interface RequestContext extends IContext {
  twitchClient: TwitchClient
}

export interface IInclude {
  attributes: any,
  id: string,
  type: string
}

export interface IPatreonUser {
  about: string
  fullName: string
  id: string
  imageUrl: string
  url: string
}
