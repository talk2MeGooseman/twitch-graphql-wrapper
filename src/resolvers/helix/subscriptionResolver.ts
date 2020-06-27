import { HelixSubscription } from 'twitch';

export default {
  HelixSubscription: {
    async broadcaster(parent: HelixSubscription) {
      return await parent.getBroadcaster()
    },
    async user(parent: HelixSubscription) {
      return await parent.getUser()
    },
  }
}
