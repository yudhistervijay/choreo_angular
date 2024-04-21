//sample nodeJS code snippet
// import oauth from 'axios-oauth-client'
// import axios from 'axios';

// const CONSUMER_KEY="your_consumer_key"
// const CONSUMER_SECRET="your_consumer_secret"
// const TOKEN_URL="your_token_url"

// # Encode client credentials as Base64
// CLIENT_CREDENTIALS=$(echo -n "$CLIENT_ID:$CLIENT_SECRET" | base64)

// curl -X POST $TOKEN_URL \
//   -H "Content-Type: application/x-www-form-urlencoded" \
//   -H "Authorization: Basic $CLIENT_CREDENTIALS" \
//   --data-urlencode "grant_type=client_credentials"

// // consumerKey, consumerSecret and tokenUrl represent variables to which respective environment variables were read
// const getClientCredentials = oauth.clientCredentials(
//   axios.create(),
//   <tokenUrl>,
//   <consumerKey>,
//   <consumerSecret>
// );
// const auth = await getClientCredentials();
// const accessToken = auth.access_token;
