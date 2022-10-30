var addon = require('bindings')('screenshot');

let preurl;

setInterval(() => {
    const img = addon.screenshot();
    const url = 'data:image/jpeg;base64,' + img.toString('base64');
    if(preurl != url){
        preurl = url;
        console.log(url);
        console.log("");
        //console.log("change image-------------------");
    }
    delete img;
}, 100);
/*
function getNextData(){
    var mydata = addon.screenshot();
    console.log(mydata);
    delete mydata;
    setImmediate(getNextData);
}
getNextData();
*/
//addon.screenshot();
//const img = addon.screenshot();
//console.log(img.toString('base64')); // 'world'