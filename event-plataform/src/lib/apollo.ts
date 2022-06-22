import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oj3m7007rt01yw3a1zcz6g/master',
  cache: new InMemoryCache()
});