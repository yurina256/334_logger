$("#bt").on("click",function(){
    console.log("hoge");
    var val = $("#tweetURL").val();
　　console.log(val);
    val = Number(val.substr(-19));
    console.log(val);
    val = val.toString(2);
    val = parseInt(val.substr(0,val.length-22),2);
    console.log(val);
    var dateTime = new Date((val)+1288834974657);
    console.log(dateTime);
    var time = dateTime.toLocaleTimeString();
  const msec = (val+657)%1000;
  console.log(time);
  if(isNaN(dateTime.getTime())) break;
  
    $("#date").text("結果:"+time+"."+msec);

    if(msec==0){
        $("#sec-err").removeClass("text-primary");
        $("#sec-err").removeClass("text-danger");
        $("#sec-err").addClass("text-success");
        $("#sec-err").text("0ms :)");
    }else if(msec>=500){
        $("#sec-err").removeClass("text-success");
        $("#sec-err").removeClass("text-primary");
        $("#sec-err").addClass("text-danger");
        $("#sec-err").text(msec-1000+"ms");
    }else{
        $("#sec-err").removeClass("text-success");
        $("#sec-err").removeClass("text-danger");
        $("#sec-err").addClass("text-primary");
        $("#sec-err").text(msec+"ms");
    }
    //後で正規表現にする
});