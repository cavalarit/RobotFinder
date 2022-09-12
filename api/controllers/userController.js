require('../models/contants');

const user = (auth) => {
  return new Promise((resolve, reject) => {
    if (auth == USER_TOKEN) {
      var userModel = require('../models/userModel');
      var usersList = userModel.getUsers();      
      resolve(JSON.stringify(usersList));
    }else{
      reject(JSON.stringify({'error':'Not found'}));
    }
  });
};

exports.user = user;
