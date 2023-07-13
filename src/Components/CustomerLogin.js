import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // Assuming the response contains a success flag or status code upon successful login
      const { success } = response.data;

      if (success) {
        // Redirect to the CustomerViewPage
        history.push("/customer-view");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="container-fluid text-center">
      <div>Header Menu Component</div>
      <div>
        <h2>Customer Login</h2>
      </div>

      <div className="mt-3">
        <a
          href="/oauth2/authorization/google"
          className="btn btn-lg btn-secondary fab fa-google"
        >
          &nbsp;&nbsp;Continue with Google
        </a>
      </div>

      <div className="mt-3">
        <a
          href="/oauth2/authorization/facebook"
          className="btn btn-lg btn-secondary fab fa-facebook"
        >
          &nbsp;&nbsp;Continue with Facebook
        </a>
      </div>

      <div>&nbsp;</div>

      <form onSubmit={handleLogin} style={{ maxWidth: "350px", margin: "0 auto" }}>
        {error && <p className="text-danger">{error}</p>}

        <div className="border border-secondary rounded p-3">
          <p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="E-mail"
              required
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input type="checkbox" name="remember-me" /> Remember Me
          </p>
          <p>
            <input type="submit" value="Login" className="btn btn-primary" />
          </p>
        </div>
      </form>

      <div>&nbsp;</div>
      <div>
        or <a href="/ForgotPassword">Forgot Password</a>
      </div>
      <div>
        Don't have an account? <a href="/register"><b>Sign up</b></a>
      </div>
      <div>&nbsp;</div>

      <div>Footer Menu Component</div>
    </div>
  );
};

export default Login;
