import React, { useState } from "react";
import styled from "styled-components";

import { sendData } from "./services/sendData";

const MainContainer = styled.div`
  border: 3px solid red;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
    }
  }
`;

const App = () => {
  const [userData, setUserData] = useState({ email: "", number: "" });
  const [foundUsers, setFoundUsers] = useState([]);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData(userData).then((res) => {
      setFoundUsers((prev) => [...prev, res]);
    });

    setUserData({ email: "", number: "" });
  };

  console.log(foundUsers);

  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="Enter email..."
          onChange={(e) =>
            setUserData((state) => ({ ...state, email: e.target.value }))
          }
          value={userData.email}
        />
        <input
          type="text"
          placeholder="Enter number..."
          onChange={(e) =>
            setUserData((state) => ({ ...state, number: e.target.value }))
          }
          value={userData.number}
        />
        <button type="submit">Submit</button>
      </form>
      {foundUsers &&
        foundUsers.map((item, index) => (
          <li key={item.number || index}>
            <p>{item.email}</p>
            <p>{item.number}</p>
          </li>
        ))}
    </MainContainer>
  );
};

export default App;
