import { dataForCheck } from "../data";
import { IUser } from "../types/types";

const findUsers = (data: IUser) => {
  const userEmail = data.email;
  const userNumber = data.number;
  const isUserNumberExist = !!userNumber;

  let result: IUser[] = [];

  let item: keyof typeof dataForCheck;

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
