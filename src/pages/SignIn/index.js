import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Footer, Nav } from "../../components";
import { CreateUserWithEmailAndPassword } from "../../store/action/AuthActions";
import { FaSpinner } from "react-icons/fa";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { loading, user, error } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const signin = () => {
    dispatch(CreateUserWithEmailAndPassword(form));
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
            <h1>Signin</h1>
            {error && <p className="error">{error}</p>}
            <form>
              <div className="input_section">
                <label htmlFor="name">Username:</label>
                <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  id="name"
                  type="text"
                  value={form.name}
                  placeholder="Jhon"
                />
              </div>
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
            <button className="button" onClick={signin}>
              Signin
            </button>
            <p>
              already have an account <Link to="/login">login</Link>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SignIn;
