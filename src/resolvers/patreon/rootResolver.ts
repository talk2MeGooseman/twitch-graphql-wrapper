import { RequestContext, ArgumentsWithId, IPatreonUser, IInclude } from '../../interfaces'

export default {
  Query: {
    patreon() {
      return {
        async patrons(_: ArgumentsWithId, context: RequestContext): Promise<any> {
          try {
            const result = await context.patreonClient.get(
              'campaigns/4776554/members?include=user,currently_entitled_tiers,address&fields%5Bmember%5D=full_name,is_follower,last_charge_date,last_charge_status,lifetime_support_cents,currently_entitled_amount_cents,patron_status&fields%5Btier%5D=amount_cents,created_at,description,patron_count,title,url&fields%5Buser%5D=full_name,about,image_url,url',
            );

            const { data: members, included }= result.data

            return members.map((member: any) => {
              const userId = member.relationships.user.data.id

              const user = included.reduce((accum: IPatreonUser, include: IInclude) => {
                if (include.type === 'user' && include.id === userId) {
                  return {
                    id: include.id,
                    ...include.attributes,
                  }
                }
                console.log(accum)
                return accum
              }, undefined)

              return {
                id: member.id,
                ...member.attributes,
                user,
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
              ...user.attributes,
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
