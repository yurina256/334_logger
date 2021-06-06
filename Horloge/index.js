console.log("index.js 読み込み成功");
console.log(Date.now())
var request = new XMLHttpRequest();
request.open('GET', '../api', true);
request.send();
request.onload = function() {
    var data = this.response;
    data = JSON.parse(data);
    console.log(data);
    //alert(data.hoge)
};