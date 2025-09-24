import React, { useState } from "react";
import "./index.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({}); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let tempErrors = {};

    if (!name) {
      tempErrors.name = "Name required!";
    } else if (name.length > 15) {
      tempErrors.name = "Name reduired!";
    }
    if (!email) {
      tempErrors.email = "Email required!";
    }

    if (!password) {
      tempErrors.password = "Password required!";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Form Submited Successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className={submitted && errors.name ? "invalid" : submitted && name ? "valid" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className={submitted && errors.email ? "invalid" : submitted && email ? "valid" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          className={submitted && errors.password ? "invalid" : submitted && password ? "valid" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
