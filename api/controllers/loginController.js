require('../models/contants');

const login = (user, password) => {
  return new Promise((resolve, reject) => {
    if (USER_USER == user && USER_PASSWORD == password) {
      resolve(JSON.stringify({'token':'5DE6E0C53BB8BB6CBB392526FA278D47'}));
    }else{
      reject(JSON.stringify({'error':'invalid user and password'}));
    }
  });
};

exports.login = login;
