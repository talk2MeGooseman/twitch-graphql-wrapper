import { RequestContext, ArgumentsWithId } from '../../interfaces';
import { jsonApiURL } from "patreon";

export default {
  Query: {
    patreon() {
      return {
        async campaigns(_: ArgumentsWithId, context: RequestContext): Promise<any> {
          const url = jsonApiURL(`/current_user`)
          const result = await context.patreonClient(url, { fields: {
            pledge: []
          }})
          const campaigns = result.store.findAll('campaign')
          console.log(campaigns)
          return campaigns
        },
        async me(_: ArgumentsWithId, context: RequestContext): Promise<any> {
          const url = jsonApiURL(`/current_user`)
          const result = await context.patreonClient(url)
          const user = result.store.findAll('user')[0]
          console.log(user)
          return {
            ...user
          }
        }
      }
    },
  },
};

1
