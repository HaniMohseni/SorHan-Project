const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 20, // Adjust the number of concurrent connections
};

const batchImportRestaurants = async () => {
  try {
    // Sample restaurant data
    const restaurants = [
      {
        Name: "Restaurant TakFood",
        Country: "Canada",
        State: "Quebec",
        City: "Magog",
      },
      {
        Name: "Restaurant TamliFood",
        Country: "USA",
        State: "California",
        City: "Sacramento",
      },
      {
        Name: "Restaurant Takhte Tavoos",
        Country: "Canada",
        State: "Ontario",
        City: "Toronto",
      },
      {
        Name: "Restaurant Saffron Grill",
        Country: "USA",
        State: "FL",
        City: "Miami Beach",
      },
      {
        Name: "Restaurant Banu",
        Country: "Canada",
        State: "Ontario",
        City: "Toronto",
      },
      // ... more data
    ];

    const batchSize = 500; // Number of documents per batch
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();
    const db = client.db("RestaurantsDB");

    // Create indexes to improve query performance
    await db.collection("restaurants").createIndex({ City: 1 });
    await db.collection("restaurants").createIndex({ Country: 1 });

    // Insert data in batches
    for (let i = 0; i < restaurants.length; i += batchSize) {
      const batch = restaurants.slice(i, i + batchSize);
      const bulkOperations = batch.map((restaurant) => ({
        insertOne: { document: restaurant },
      }));

      await db
        .collection("restaurants")
        .bulkWrite(bulkOperations, { ordered: false });
    }

    await client.close();
    console.log("Data imported and indexed successfully!");
  } catch (err) {
    console.error("Error importing data:", err.message);
  }
};

batchImportRestaurants();
