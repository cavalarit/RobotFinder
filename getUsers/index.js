require('../api/models/contants');
const { user } = require('../api/controllers/userController');
module.exports = async function (context, req) {
  try {
    var auth = req.get('authentication');

    const result = await user(auth);

    context.res = {
      body: result,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message,
    };
  }
};
