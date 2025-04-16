console.log("RESTAPI Success");

modelPage.setData(modelModelObject.getData()[0]);
console.log("PAGE DATA",modelPage.getData());

// // Refresh the page by invalidating and rerendering
// try {
//     // Option 1: Refresh the entire page
//     Page.invalidate();
//     sap.ui.getCore().applyChanges();
    
//     // Option 2: If you need to refresh model binding
//     modelPage.refresh(true);
    
//     sap.m.MessageToast.show("Page refreshed successfully");
// } catch (error) {
//     console.error("Error refreshing page:", error);
//     sap.m.MessageToast.show("Error refreshing page");
// }


