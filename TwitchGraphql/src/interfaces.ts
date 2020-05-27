import TwitchClient from "twitch/lib";
import { Context } from "@azure/functions";

export interface ArgumentsWithId {
  id: string
  [propName: string]: any;
}

export interface RequestContext extends Context {
  twitchClient: TwitchClient
}
