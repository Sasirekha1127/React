import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const UserContext = createContext();

function Update() {
  // 2. State maintain pannudhu
  const [username, setUsername] = useState("Surya");

  return (
    // 3. Provider la state + setter pass pannudhu
    <UserContext.Provider value={{ username, setUsername }}>
      <Navbar />
      <Profile />
      <Footer />
    </UserContext.Provider>
  );
}

// Navbar shows username
function Navbar() {
  const { username } = useContext(UserContext);
  return <h2>Navbar → Welcome {username} 👋</h2>;
}

// Profile can update username
function Profile() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div>
      <p>Profile → Current user: {username}</p>
      <button onClick={() => setUsername("Sasi")}>Change to Sasi</button>
      <button onClick={() => setUsername("Surya")}>Change to Surya</button>
    </div>
  );
}

// Footer also uses same username
function Footer() {
  const { username } = useContext(UserContext);
  return <h4>Footer → Logged in as {username}</h4>;
}

export default Update;
