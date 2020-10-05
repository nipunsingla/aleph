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
  }`;

const SEND_OTP_QUERY = gql`
    query sendOtp($mobileno:String!){
        sendOtp(mobileno: $mobileno)
}`
const VERIFY_OTP_QUERY = gql`
    query verifyOtp($mobileno:String!,$otp:String!){
      verifyOtp(mobileno:$mobileno,otp:$otp)
    }
`;
const CREATE_USER_MUTATION = gql`
    mutation createUser($name:String!,$email:String!,$password:String!,$usertype:String!,$schoolusername:String!,$mobileno:String!,$username:String!){
      createUser(userInput:{
        name:$name,email:$email,password:$password,usertype:$usertype,schoolusername:$schoolusername,mobileno:$mobileno,username:$username  }){
          _id
        }

}`;
export { client, USER_LOGIN_QUERY, SEND_OTP_QUERY, VERIFY_OTP_QUERY, CREATE_USER_MUTATION };