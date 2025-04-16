if (sap.n) {
    console.log(AppCache.userInfo.username);
    var options = {
        data: {
            creationMail: AppCache.userInfo.username,
        },
    };

    apiRestAPICreateNewBC(options);
//     apiRestAPICreateNewBC(options).then((response) => {
//  console.log(response);
//  })
} else {
    console.log("Not running in LP");
    var options = {
        data: {
            creationMail: "Test.Tester@neptune-software.com",
        },
    };

    apiRestAPICreateNewBC(options);
//     apiRestAPICreateNewBC(options).then((response) => {
//  console.log(response);
//  })
}


