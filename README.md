# Twitch GraphQL Wrapper

An implementation of GraphQL that wraps the Twitch API to ease of use ability to use it with Authenticated endpoints.

## Why?

With the new authentication requirement Twitch has made for all Helix endpoints, it is now a requirement to have a backend server to be able to authenticate in order to use all endpoints. With this in mind I decided to build a generalized API server all my applications can potentially use.

## Why GraphQL?

After I started developing a new server I discovered it will start to become VERY tedious to create a RESTful endpoint for all the different Twitch endpoints I need to fetch data from. I found that GraphQL solves this annoying problem by defining the Schema and Resolve, and BAM new data to easily fetch with out that need of adding yet another endpoint.

