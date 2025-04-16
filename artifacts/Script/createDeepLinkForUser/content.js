/*
    This code snippet is used to obtain the http request object 
    when the server script is used as an api endpoint.
*/
const data = req.body; // request data body.

const userId = data.businessCardId;
//const userId = "F45126B7-FB06-F011-AAA7-6045BDDE104C"

const qrcodegenerator = modules.qrcodegenerator;


var deepLink ="";

var configId = "6C205AF8-4A03-F011-90C9-7C1E5237A7CF"
//var userId = "F70B698B-B90E-47C9-B520-7BEE7293D297"


const entityConfig = await entities.businesscardadmin.findOne(configId);
console.log(entityConfig);

const entityUserInfo = await entities.businesscard_info.findOne(userId);
console.log(entityUserInfo);

deepLink = entityConfig.systemLink + entityConfig.launchpadLink + entityConfig.appName + "&id=%22" + entityUserInfo.id + "%22" ;

console.log("Deep Link: ", deepLink);

//Example: https://gtmdemosystem.neptune-software.cloud/public/launchpad/BusinessCardLP#businesscardapp&id="F70B698B-B90E-47C9-B520-7BEE7293D297"

await entities.businesscard_info.update(userId, { directLink: deepLink});



// var qr = qrcodenpm.qrcode(4, 'M');
// qr.addData("text");
// qr.make();

// qr.createImgTag(4);    // creates an <img> tag as text
// qr.createTableTag(4);  // creates a <table> tag as text


// console.log(qr);

var typeNumber = 7;
var errorCorrectionLevel = 'L';
var qr = qrcodegenerator(typeNumber, errorCorrectionLevel);
qr.addData(deepLink);
qr.make();

var dataUrl = qr.createDataURL()

console.log(dataUrl);


await entities.businesscard_info.update(userId, { qrCodeImage: dataUrl});


