const dataForCheck = require("../data");

const findUsers = (data) => {
  const userEmail = data.email;
  const userNumber = data.number;
  const isUserNumberExist = !!userNumber;

  let result = [];

  for (item in dataForCheck) {
    if (dataForCheck[item].email === userEmail) {
      if (isUserNumberExist) {
        dataForCheck[item].number === userNumber
          ? result.push(dataForCheck[item])
          : null;
      } else {
        result.push(dataForCheck[item]);
      }
    }
  }

  return result;
};

module.exports = { findUsers };
