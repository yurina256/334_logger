const express = require('express');
const app = express();
app.use(express.static('home'));
app.get('/api',(req,res) => {
    var json = {hoge:"huga"};
    res.json(json);
});
app.listen(3000, () => console.log('Listening on port 3000'));