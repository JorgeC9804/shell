import React, { useState } from "react";
import "../styles/sessions/session.css";
import "../styles/sessions/media.session.css";

const Signup = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState(null);

  // const handleDBSession = () => {
  //   /**
  //    * here conection data base
  //    */
  // };

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
    const data = {
      name,
      lastName,
      password,
    };
    setName("");
    setLastName("");
    setPassword("");
    setBirth("");
    console.log(data);
    console.log(birth);
  };

  return (
    <div className="sign-up dy center">
      <div className="shell dy center">
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
          <input value="submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
