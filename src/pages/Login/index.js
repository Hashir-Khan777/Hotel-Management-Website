import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Footer, Nav } from "../../components";
import { LoginWithEmailAndPassword } from "../../store/action/AuthActions";
import "./index.css";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { loading, user, error } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    dispatch(LoginWithEmailAndPassword(form));
  };

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="login">
      <Nav background relative />
      {loading ? (
        <div className="loading">
          <FaSpinner className="spinner" />
        </div>
      ) : (
        <div className="login_form">
          <div className="form">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form>
              <div className="input_section">
                <label htmlFor="email">Email Address:</label>
                <input
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  id="email"
                  type="email"
                  value={form.email}
                  placeholder="name@emaple.com"
                />
              </div>
              <div className="input_section">
                <label htmlFor="password">Password:</label>
                <input
                  value={form.password}
                  id="password"
                  type="password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="password"
                />
              </div>
            </form>
            <button className="button" onClick={login}>
              Login
            </button>
            <p>
              Donot have an account <Link to="/signin">Signin</Link>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Login;
