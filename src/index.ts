import express, { response } from 'express';

const app = express();

app.get('/', function(request, response) {
  return response.json({message: 'tudo blz w'})
})

app.listen(3000);