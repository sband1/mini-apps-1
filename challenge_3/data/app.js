const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'purchaseDetails';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  }
  console.log("Connected to the server!");

  const db = client.db(dbName);
  db.createCollection("details", function(err, res) {
    if (err) {
      console.log('mongo', err);
    } else {
      console.log("Collection created!", res);
    }
  })

  client.close();
});

