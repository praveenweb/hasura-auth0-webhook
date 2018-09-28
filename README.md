# Hasura Auth Webhook with Auth0 Integration

## Set auth0 domain

  Set your auth0 domain in `.env`.
  Also allow callbacks for `http://localhost:3000/callback` and any other deployed URL in your `auth0` dashboard.

## Deploy the auth Webhook (using glitch)

  [![glitch-deploy-button](https://raw.githubusercontent.com/hasura/sample-auth-webhook/master/assets/deploy-glitch.png)](http://glitch.com/edit/#!/import/github/praveen/hasura-auth0-webhook)

  This is a simple Node.js webhook which can be deployed on Heroku, now etc.
