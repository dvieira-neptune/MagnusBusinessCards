// Custom Init - Happens only once when mounting the component





// sap.ui.getCore().attachInit(function (startParams) {




//     setTimeout(function () {
//         //  Do something
//     }, 200);
// });

var userIdSet; // Change this here IF you want to setup for another demo.


if (typeof userId === 'undefined') {
  // Code to execute if the variable is not defined
  userId = "2F763265-E7E0-46C5-A390-BE6F71F52014";
} else {
  // Code to execute if the variable is defined
  
}

// companyName is a global variable we have defined in the launchpad..!
userIdSet = userId;


    var options = {
        parameters: {
            where: JSON.stringify({ id: userIdSet }),
        },
    };

    apiRestAPI(options); //CHANGE NAME
    console.log("INIT")

    console.log(userId);




