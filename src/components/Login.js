import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(form.email, form.password);
    if (ok) {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {error && <p className="form-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      <p>
        No account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;