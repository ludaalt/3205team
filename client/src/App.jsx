import React, { useState } from "react";
import styled from "styled-components";

import { sendData } from "./services/sendData";
import { maskString } from "./services/maskString";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    sendData(userData).then((res) => {
      setFoundUsers((prev) => [...prev, res]);
      setLoading(false);
    });

    setUserData({ email: "", number: "" });
  };

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
          maxLength="8"
          type="text"
          placeholder="Enter number..."
          onChange={(e) =>
            setUserData((state) => ({
              ...state,
              number: e.target.value,
            }))
          }
          value={userData.number && maskString(userData.number)}
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
      <p>{loading ? "Please wait..." : null}</p>
      {foundUsers[0] &&
        foundUsers[0].map((item, index) => (
          <li key={item.number || index}>
            <p>{item.email}</p>
            <p>{item.number}</p>
          </li>
        ))}
    </MainContainer>
  );
};

export default App;
