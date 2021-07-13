import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateHotel } from "../../store/action/HotelActions";
import { Footer, Nav } from "./../../components";
import "./index.css";
import { FaSpinner } from "react-icons/fa";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const dispatch = useDispatch();
  const { loading, Hotels, error } = useSelector((state) => state.HotelReducer);

  const add = () => {
    dispatch(CreateHotel(form));
  };

  useEffect(() => {
    dispatch({
      type: "CREATE_HOTEL_RESET",
    });
  }, [dispatch]);

  return (
    <div className="admin">
      <Nav relative background />
      {loading ? (
        <div className="loading">
          <FaSpinner className="spinner" />
        </div>
      ) : (
        <div className="admin_content">
          <div className="form">
            <h1>Add Hotel</h1>
            {error && <p className="error">{error}</p>}
            {Hotels && <p className="message">Create Hotel Success</p>}
            <form>
              <div className="input_section">
                <label htmlFor="name">Hotel Name:</label>
                <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  id="name"
                  type="email"
                  value={form.name}
                  placeholder="PC"
                />
              </div>
              <div className="input_section">
                <label htmlFor="description">Hotel description:</label>
                <textarea
                  value={form.description}
                  id="description"
                  type="text"
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows="7"
                  placeholder="About hotel..."
                />
              </div>
              <div className="input_section">
                <label htmlFor="price">Per day price:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: 20, marginRight: 3 }}>$</span>
                  <input
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    id="price"
                    type="number"
                    value={form.price}
                    placeholder="200"
                  />
                </div>
              </div>
              <div className="input_section">
                <label htmlFor="image">Image:</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.files[0] })
                  }
                  id="images"
                  type="file"
                  accept="image/*"
                  placeholder="200"
                />
              </div>
            </form>
            <button className="button" onClick={add}>
              Add
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Admin;
