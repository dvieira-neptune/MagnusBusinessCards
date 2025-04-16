
var options = {
  parameters: {
    where: JSON.stringify({ id: selectedBC }),
  },
};

apiRestAPIDeleteBC(options);


DialogDeleteBC.close();