require('../api/models/contants');
const { login } = require('../api/controllers/loginController');
module.exports = async function (context, req) {
  try {
    const { user, password } = context.bindingData;
    const result = await login(user, password);

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
