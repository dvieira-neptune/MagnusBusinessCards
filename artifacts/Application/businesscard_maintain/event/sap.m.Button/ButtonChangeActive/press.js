if(ButtonChangeActive.getType() != "Reject") {
    ButtonChangeActive.setType("Reject");
    ButtonChangeActive.setIcon("sap-icon://fas/lock");
    changeEditable(false);
}
else {
    ButtonChangeActive.setType("Attention");
    ButtonChangeActive.setIcon("sap-icon://fas/lock-open");
    changeEditable(true);
}


