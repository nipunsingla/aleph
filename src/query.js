import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://aleph-server.vercel.app/graphql',
    cache: new InMemoryCache()
});

const USER_LOGIN_QUERY = gql`
  query loginUser($loginKey:String!, $password:String!, $flag:String!) {
      loginUser(loginKey:$loginKey,password:$password,flag:$flag){
        userId,
        accessToken,
        refreshToken
      }
  }`
export { client, USER_LOGIN_QUERY };