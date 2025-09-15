import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setUsername(value);

    if (value.trim().length < 3) {
      setError("Username must be at least 3 characters long");
    } else {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (username.trim().length >= 3) {
      alert(`Submitted: ${username}`);
      setUsername("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={username.trim().length < 3}>
        Submit
      </button>
    </form>
  );
}