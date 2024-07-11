const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/utils/Database');
const userRoutes = require('./src/routes/UserRoutes');
const textRoutes = require('./src/routes/TextRoutes');
const env = require('./src/configs/ApplicationConfiguration');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/texts', textRoutes);

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(env.APPLICATION_PORT, () => console.log(`Example app listening on port ${env.APPLICATION_PORT}!`));
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = app;
