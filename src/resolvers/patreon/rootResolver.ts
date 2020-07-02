import { RequestContext, ArgumentsWithId } from '../../interfaces'

export default {
  Query: {
    patreon() {
      return {
        async patrons(_: ArgumentsWithId, context: RequestContext): Promise<any> {
          try {
            const result = await context.patreonClient.get(
              'campaigns/4776554/members?include=currently_entitled_tiers,address&fields%5Bmember%5D=full_name,is_follower,last_charge_date,last_charge_status,lifetime_support_cents,currently_entitled_amount_cents,patron_status&fields%5Btier%5D=amount_cents,created_at,description,discord_role_ids,edited_at,patron_count,published,published_at,requires_shipping,title,url',
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
          try {
            const result = await context.patreonClient.get(
              'identity?include=campaign&fields%5Buser%5D=about,created,email,first_name,full_name,image_url,last_name,thumb_url,url,vanity&fields%5Bcampaign%5D=summary,url,patron_count,creation_name',
            );

            const { data: user }= result.data

            return {
              ...user.attributes
            }
          } catch (error) {
            throw new Error(error.message)
          }
        }
      }
    },
  },
};

1
