const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const journalRouter = require('./routes/api/journal-routes');
const qoutesRouter = require('./routes/qoutes-routes');
const profileRouter = require('./routes/api/user-routes')

app.use('/journal', journalRouter);
app.use('/qoutes', qoutesRouter);
app.use('/profile', profileRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});