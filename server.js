const express = require('express');
const request = require('request');
const app = express();

const authDomain = process.env.AUTH_ZERO_DOMAIN;
const PORT = process.env.PORT || 3000;

if (!authDomain) {
  console.log('Please set your auth0 domain as an environment variable: AUTH_ZERO_DOMAIN');
}

app.get('/', (req, res) => {
  const authHeaders = req.get('authorization');
  const options = {
    method: 'GET',
    headers: {
      'Authorization': authHeaders
    },
    url: `https://${authDomain}/userinfo`
  };
  request(options, (err, response, body) => {
    console.log(response.statusCode);
    console.log(body);
    if (response.statusCode !== 200 || err){
      console.log(err);
      res.status(401);
      res.send(JSON.stringify({'x-hasura-role': 'anonymous'}));
      return;
    } else {
      respObj = JSON.parse(body);
      res.status(200);
      res.send(JSON.stringify({
        'x-hasura-user-id': respObj.sub,
        'x-hasura-role': 'user'
      }));
      return;
    }
  })
});

app.listen(PORT, () => console.log('Example app listening on port ' + PORT + ' !'))
