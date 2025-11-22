require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('sample apii');
});

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wellnessdebugger';

mongoose.connect(MONGO).then(() => {
    console.log('mongo connected');
    app.listen(PORT, () => {
        console.log('listening', PORT);
    })
}).catch((err) => {
    console.log('mongo err', err);
    process.exit(1);
})