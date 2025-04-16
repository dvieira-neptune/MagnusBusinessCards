const context = oEvent.oSource.getBindingContext();
const data = context.getObject();

TitleDeleteBCName.setText(data.businessCardName);

selectedBC = data.id;

DialogDeleteBC.open();