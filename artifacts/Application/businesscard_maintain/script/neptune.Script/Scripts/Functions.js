function changeEditable(status) {
    Input.setEditable(status);
    Input1.setEditable(status);
    Input2.setEditable(status);
    Input3.setEditable(status);
    Text.setEditable(status);
    Input4.setEditable(status);
    Input5.setEditable(status);
    Text3.setEditable(status);
    Text4.setEditable(status);
    Text5.setEditable(status);
    Text6.setEditable(status);
    Input6.setEditable(status);
    MyCompanyTile.setPressEnabled(status);
    WhatsAppTile.setPressEnabled(status);
    LinkedInTile.setPressEnabled(status);
    InstagramTile.setPressEnabled(status);
    ScheduleAMeetingTile.setPressEnabled(status);
    FileTile.setPressEnabled(status);
    GenericTileYoutube.setPressEnabled(status);

    if (status === false){
    ButtonChangeActive.setType("Reject");
    ButtonChangeActive.setIcon("sap-icon://fas/lock");
    }
    else {
    ButtonChangeActive.setType("Attention");
    ButtonChangeActive.setIcon("sap-icon://fas/lock-open");
    }

}



function getYourBusinessCards() {
    if (sap.n) {
        console.log(AppCache.userInfo.username);
        const options = {
            parameters: {
                where: JSON.stringify({ creationMail: AppCache.userInfo.username }),
            },
        };

        apiRestAPIGetBusinessCards(options);
    } else {
        console.log("Not running in LP");
        const options = {
            parameters: {
                where: JSON.stringify({ creationMail: "Test.Tester@neptune-software.com" }),
            },
        };

        apiRestAPIGetBusinessCards(options);
    }
}