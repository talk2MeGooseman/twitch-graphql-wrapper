require('dotenv').config();

export default {
  clientId: process.env.TWITCH_CLIENT_ID || "",
  clientSecret: process.env.TWITCH_SECRET || "",
  accessToken: process.env.ACCESS_TOKEN || "",
  refreshToken: process.env.REFRESH_TOKEN || "",
}
