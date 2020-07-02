import { RequestContext, ArgumentsWithId } from '../../interfaces'

export default {
  Query: {
    patreon() {
      return {
        async patrons(_: ArgumentsWithId, context: RequestContext): Promise<any> {
          try {
            const result = await context.patreonClient.get(
              'https://www.patreon.com/api/oauth2/v2/campaigns/4776554/members?include=currently_entitled_tiers,address&fields%5Bmember%5D=full_name,is_follower,last_charge_date,last_charge_status,lifetime_support_cents,currently_entitled_amount_cents,patron_status&fields%5Btier%5D=amount_cents,created_at,description,discord_role_ids,edited_at,patron_count,published,published_at,requires_shipping,title,url',
            );

            const { data: members }= result.data;
            return members.map((member: any) => {
              return {
                ...member.attributes,
              }
            })
          } catch (error) {
            throw new Error(error.message)
          }
        },
        async me(_: ArgumentsWithId, context: RequestContext): Promise<any> {
          const result = await context.patreonClient()
          const user = result.store.findAll('user')[0]

          return {
            ...user
          }
        }
      }
    },
  },
};

1
