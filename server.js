const express = require('express');
const router = express.Router()

const app = express();

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use("/", router);
app.listen(2020, () => {
    console.log('server is listening on port 2020');
});