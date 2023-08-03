'use strict';

const express = require('express');
const cors = require('cors');
const postmark = require("postmark");
const {MongoClient} = require('mongodb');

// Postmark mail client
var client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Enable CORS
app.use(cors());

let example = `<ul>
  <li>🟦🟦 Quality Sleep 🛌 |Hlth| [ce]</li>
  <li>🟪🟪 Eating Vegan 🌱 |Veg| [ce]</li>
  <li>🟪🟪 Car Free🚶🏻‍♀️🚶🏻‍♂️|Eco| [ce]</li>
  <li>🟪🟪 Minimalism 🪷 |Mini| [ce]</li>
  <li>🟪🟪 Morning snuggles 🥰 |Lov|</li>
  <li>🟨 Breakfast (L) 🥞🍓 |Hlth|</li>
</ul>`

app.get('/', (req, res) => {
    res.send('Hello World');

    client.sendEmail({
    "From": "bob@because.social",
    "To": "bob@because.social",
    "Subject": "Early Demo of Value Block Entries",
    "HtmlBody": example,
    "TextBody": "Hello from Postmark!",
    "MessageStream": "day-of-value-blocks"
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});