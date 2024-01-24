const express = require('express');



const PORT = 3333;

const app = express();



// db.query('INSERT INTO users (username, email, password) VALUES ("jd", "jd@test.com", "password123")', (err, results) => {
//   if (err) return console.log(err);

//   console.log(results); 
// });

// db.query('SELECT * FROM users', (err, results) => {
//   if (err) return console.log(err);

//   console.log(results);
// });

const api_routes = require('./routes/api_routes');

const path = require('path');



// Opening up the middleware channel to allow json to be sent through from the client
app.use(express.json());

// Share or create a GET route for every file in the public folder
app.use(express.static('./public'));

// Open CORS to all domains
// app.use(cors());

//Load routes
app.use('/api', api_routes);

//Wildcard route- catches any random routes
//load AFTER all other routes (HW 11!)
app.get('*', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});