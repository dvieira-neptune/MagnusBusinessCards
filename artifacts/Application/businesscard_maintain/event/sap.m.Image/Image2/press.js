

const context = oEvent.oSource.getBindingContext();


// Get entire model
const data = context.getObject();

BackgroundPictureLink.setText(data.backgroundLink);

DialogSelectBackground.close();