const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors');  // Import CORS

const app = express();  // Initialize the app

app.use(cors());  // Use CORS middleware
app.use(bodyParser.json());  // Use body-parser middleware

db.sequelize.sync();  // Sync the database

const todoRoutes = require('./routes/todos'); // Import routes for todos
const usersRoutes = require('./routes/users'); // Import routes for users

app.use('/todos', todoRoutes);  // Use the todos routes
app.use('/users', usersRoutes);  // Use the users routes

app.get('/', (req, res) => {
  res.send('Welcome Areej');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
