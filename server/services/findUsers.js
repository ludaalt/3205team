const dataForCheck = require("../data");

const findUsers = (data) => {
  //console.log(data);
  const userEmail = data.email;
  const userNumber = data.number;
  const isUserNumberExist = !!userNumber;

  let result = [];

  for (item in dataForCheck) {
    // console.log(dataForCheck[item].email);
    // console.log(userEmail);
    // console.log(dataForCheck[item].email === userEmail);

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
