import { loadFilesSync, mergeTypeDefs } from "graphql-tools";
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './types'), { recursive: true })
const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs
