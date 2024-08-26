import React, { useState } from "react";

const Login = () => {
  // State to manage if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to manage form input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handler for form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (in a real application, you'd verify credentials here)
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  // Handler for logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
