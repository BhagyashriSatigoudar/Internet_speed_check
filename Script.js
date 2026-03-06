function startTest(){

document.getElementById("status").innerText="Testing...";

let imageAddr="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";

let downloadSize=5000000;

let startTime=new Date().getTime();

let download=new Image();

download.onload=function(){

let endTime=new Date().getTime();

let duration=(endTime-startTime)/1000;

let bitsLoaded=downloadSize*8;

let speedMbps=((bitsLoaded/duration)/1024/1024).toFixed(2);

document.getElementById("speed").innerText=speedMbps+" Mbps";

document.getElementById("status").innerText="Test Complete";

}

download.src=imageAddr+"?nnn="+startTime;

}