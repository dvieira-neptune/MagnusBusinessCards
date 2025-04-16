var options = {
  data: {
    businessCardId: xhr.responseJSON.raw[0].id, //CHANGE / ADD data you want to update
  },
};

apiRestAPICreateQRCode(options); //CHANGE NAME

