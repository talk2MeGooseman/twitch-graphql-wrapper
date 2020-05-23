import path from 'path'
import { mergeResolvers, loadFilesSync } from 'graphql-tools'

const resolversArray = loadFilesSync(path.join(__dirname, '.'))
export default mergeResolvers(resolversArray);
