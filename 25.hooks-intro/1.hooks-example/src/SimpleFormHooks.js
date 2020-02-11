import React, { useState } from "react";

export default function SimpleFormHooks() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>The value is...{email}</h1>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={() => setEmail("")}>Submit</button>
    </div>
  );
}
