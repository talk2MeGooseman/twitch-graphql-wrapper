import { HelixStream } from 'twitch';

export default {
  HelixStream: {
    async game(parent: HelixStream) {
      return await parent.getGame()
    },
    async user(parent: HelixStream) {
      return await parent.getUser()
    },
  },
}
