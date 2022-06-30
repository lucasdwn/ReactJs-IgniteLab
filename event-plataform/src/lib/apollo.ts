import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "ENV",
    headers: {
        'Authorization': `Bearer ENV},
    cache: new InMemoryCache()
})
