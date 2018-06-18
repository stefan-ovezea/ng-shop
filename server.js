const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');

const userRouter = require('./routes/user-routes');
app.use('/users', userRouter);
app.use(cors());

app.get('/', (req, res) => {
    res.send('{"message": "Hello World!"}');
});

app.listen(config.serverPort, () => {
    console.log(`Server is listening on ${config.serverPort}`);
});
