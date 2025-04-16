DialogChangeLinks.open();



// Get the InstagramLink element using the current view's ID prefix
LinkChangeActive = InstagramLink;

//LinkChangeActive = sap.ui.getCore().byId("InstagramLink");
//LinkChangeActive = sap.ui.byId("InstagramLink");


console.log(LinkChangeActive);

InputDialogChangeLinks.setValue(InstagramLink.getText());