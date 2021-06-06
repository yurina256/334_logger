const express = require('express');
const app = express();

app.use(express.static('Horloge'));
app.use(express.static("about"));
app.use('/public', express.static(__dirname + '/public'));
app.get('/api',(req,res) => {
    var json = {hoge:"huga"};
    res.json(json);
});
app.get("/about",(req,res) => {
    res.sendFile(__dirname + "/about/index.html");
})
app.listen(3000, () => console.log('Listening on port 3000'));