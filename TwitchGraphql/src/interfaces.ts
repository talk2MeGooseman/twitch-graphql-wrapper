import TwitchClient from "twitch/lib";
import { Context } from "@azure/functions";

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

export interface RequestContext extends Context {
  twitchClient: TwitchClient
}
