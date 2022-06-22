import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohfyyx02e201yw9l017894/master',
    cache: new InMemoryCache()
})