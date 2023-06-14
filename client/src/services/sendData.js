export const sendData = (data) => {
  // let result = [];
  return fetch("/api", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      return data.map((item) => {
        return {
          email: item.email,
          number: item.number,
        };
      });
    });
};
