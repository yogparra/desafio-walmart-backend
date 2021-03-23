#!/bin/bash
#mongoimport --host localhost:27017 --username productListUser --password productListPassword --authenticationDatabase admin --db promotions --collection products --type json --file /database/products.json --jsonArray
mongoimport --uri 'mongodb://productListUser:<productListPassword>@127.0.0.1:27017/promotions?authSource=admin' --collection products --mode upsert --file /database/products.json


