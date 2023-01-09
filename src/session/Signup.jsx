import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  UserAddOutlined,
  LoadingOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import "../styles/sessions/session.css";
import "../styles/sessions/media.session.css";

const Signup = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  // const [next, setNext] = useState(false);
  const [error, setError] = useState({ response: true, message: "" });

  const handleDBSession = async data => {
    console.log(data);
    try {
      await axios.post("http:", {
        name: data.name,
        lastName: data.lastName,
        password: data.password,
        birth: data.birth,
      });
    } catch (Exception) {
      console.log(Exception.message);
      setError({ response: false, message: Exception.message });
      // setNext(true);
    }
  };

  const handleClose = () => {
    setError({ response: true, message: "" });
  };

  const handleActive = (number, restriction, e) => {
    /**
     * n -> number
     * e -> parameter
     */
    restriction === "name" ? setName(e.target.value) : setName(name);
    restriction === "lastName"
      ? setLastName(e.target.value)
      : setLastName(lastName);
    restriction === "password"
      ? setPassword(e.target.value)
      : setPassword(password);
    restriction === "birth" ? setBirth(e.target.value) : setBirth(birth);

    setNumber(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();

    setName("");
    setLastName("");
    setPassword("");
    setBirth("");
    handleDBSession({
      name,
      lastName,
      password,
      birth,
    });
  };

  return (
    <div className="sign-up">
      <div className="flag-1 dy center">
        <div className="s-colors"></div>
        {error.response ? (
          <></>
        ) : (
          <div className="message-error dy center column">
            <button onClick={handleClose} className="icons-close">
              <DoubleRightOutlined />
            </button>
            <LoadingOutlined className="icon-error" />
            <br />
            {error.message}
          </div>
        )}
        <div className="shell dy center column">
          <div>
            {/* <ShopOutlined className="icon" /> */}
            <UserAddOutlined className="icon" />
          </div>
          <form action="#" onSubmit={handleSubmit} className="dy column center">
            <label htmlFor="name" className="lb">
              name *
              <br />
              <input
                className={
                  number === 1 ? `ipt active-${number.toString()}` : `ipt bgd-t`
                }
                type="text"
                id="name"
                name="name"
                onChange={e => handleActive(1, "name", e)}
              />
            </label>
            <label htmlFor="lastName" className="lb">
              last name *
              <br />
              <input
                className={
                  number === 2 ? `ipt active-${number.toString()}` : `ipt bgd-t`
                }
                type="text"
                id="lastName"
                name="lastName"
                onChange={e => handleActive(2, "lastName", e)}
              />
            </label>
            <label htmlFor="password" className="lb">
              password *
              <br />
              <input
                className={
                  number === 3 ? `ipt active-${number.toString()}` : `ipt bgd-t`
                }
                type="password"
                id="password"
                name="password"
                onChange={e => handleActive(3, "password", e)}
              />
            </label>
            <label htmlFor="birth" className="lb">
              birth *
              <br />
              <input
                type="date"
                id="birth"
                name="birth"
                className={
                  number === 4 ? `ipt active-${number.toString()}` : `ipt bgd-t`
                }
                onChange={e => handleActive(4, "birth", e)}

                // onChange={e => setBirth(e.target.value)}
              />
            </label>
            <label className="lb dy center">
              {/* <Link className="submit dy center" to="/shingando">
                submit
              </Link> */}
              <input className="submit" value="submit" type="submit" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
